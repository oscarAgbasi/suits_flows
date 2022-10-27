import os
from fastapi import FastAPI, Body, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field, EmailStr
from bson import ObjectId
from datetime import datetime, timedelta
from jose import JWTError, jwt
#from bcrypt import *
from passlib.hash import bcrypt
from typing import Optional, List
from passlib.context import CryptContext
import motor.motor_asyncio
from typing import Optional
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

SECRET_KEY = "860159dd7ca5b73844e0310400878952f9b13dcf29e6333b1ae75ac561155293"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# dbconnection

client = motor.motor_asyncio.AsyncIOMotorClient(
    "mongodb+srv://admin:ozilISbetterthanpogba@cluster0.bxqh0.mongodb.net/mydatabase1?retryWrites=true&w=majority",
    tls=True, tlsAllowInvalidCertificates=True)
db = client['CrreditReport'] #collection


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


# authentication

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


class UserModel(BaseModel):
    username: str
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: Optional[str] = Field(...)
    email: EmailStr = Field(...)
    hashed_password: str = Field(...)
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "username": "example",
                "name": "Jane Doe",
                "email": "jdoe@example.com",
                "hashed_password": 'hahsedpassword'
            }
        }

class UserModelOut(BaseModel):
    username: str
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: Optional[str] = Field(...)
    email: EmailStr = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "username": "example",
                "name": "Jane Doe",
                "email": "jdoe@example.com",
                "unhashed_password": 'unhahsedpassword'
            }
        }


class UserInDB(UserModel):
    hashed_password: str


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


'''def get_User(db, username: str):
    if username in db:
        print(username)
        user_dict = db[username]
        return UserInDB(**user_dict)'''

async def get_User(db, username: str):
    myquery = {"name": username}
    user_dict =await db["User"].find_one(myquery)
    return user_dict
    #return UserInDB(**user_dict)


async def authenticate_user(db, username: str, password: str):
    user = await get_User(db, username)
    print(user)
    if not user:
        return False
    if not verify_password(password, await user.get("hashed_password")):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_User(db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


# API


async def get_current_active_user(current_user: UserModel = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


class UpdateUserModel(BaseModel):
    username: str
    name: Optional[str]
    email: Optional[EmailStr]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "name": "Jane Doe",
                "email": "jdoe@example.com",
                "hashedpassword": 'khbvolwdbvpudp8'
            }
        }


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    #user = await authenticate_user(db, form_data.username, form_data.password)
    user = await authenticate_user(db, 'newusersep29', 'newusersep29')
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.get('username')}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/", response_description="Add new User", response_model=UserModelOut)
async def create_User(User: UserModel = Body(...)):
    User = jsonable_encoder(User)
    #User["hashed_password"] = get_password_hash(User["hashed_password"])
    User["hashed_password"] = bcrypt.hash(User["hashed_password"])
    new_User = await db["User"].insert_one(User)
    created_User = await db["User"].find_one({"_id": new_User.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_User)


@app.get(
    "/", response_description="List all Users", response_model=List[UserModelOut]
)
async def list_Users():
    Users = await db["User"].find().to_list(1000)
    return Users


@app.get(
    "/{id}", response_description="Get a single User", response_model=UserModel
)
async def show_User(username: str):
    if (User := await db["User"].find_one({"username": username})) is not None:
        return User

    raise HTTPException(status_code=404, detail=f"User {username} not found")


@app.put("/{id}", response_description="Update a User", response_model=UserModel)
async def update_User(id: str, User: UpdateUserModel = Body(...)):
    User = {k: v for k, v in User.dict().items() if v is not None}

    if len(User) >= 1:
        update_result = await db["User"].update_one({"_id": id}, {"$set": User})

        if update_result.modified_count == 1:
            if (
                    updated_User := await db["User"].find_one({"_id": id})
            ) is not None:
                return updated_User

    if (existing_User := await db["User"].find_one({"_id": id})) is not None:
        return existing_User

    raise HTTPException(status_code=404, detail=f"User {id} not found")


@app.delete("/{username}", response_description="Delete a User")
async def delete_User(username: str):
    delete_result = await db["User"].delete_one({"username": username})

    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail=f"Users {username} not found")
