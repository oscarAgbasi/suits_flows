import createDataContext from './createDataContext';
import * as AppAuth from 'expo-app-auth';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    // Do some API Post resquest
    console.log('Signup');
  };
};

const signin = dispatch => {
  return ({email, password}) => {
    // Do some API Request here
    console.log('Signin');
    dispatch({
      type: 'signin',
      payload: {
        token: 'some access token here',
        user: 'user object',
        email,
      },
    });
  };
};

const signout = dispatch => {
  //this.signOutAsync()
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, email: '', user: null},
);


let config = {
  issuer: 'https://accounts.google.com',
  scopes: ['profile'],
  /* This is the CLIENT_ID generated from a Firebase project */
  clientId: '794170349007-7fh6l1r82u4s3galdt6gpnb0qmam81jq.apps.googleusercontent.com',
};


let StorageKey = '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';

export async function signInAsync() {
  try{
    let authState = await AppAuth.authAsync(config);
    //await cacheAuthAsync(authState);
    console.log('signInAsync', authState);
    return authState;
  } catch (err) {
    console.log('Error from Sign in' );
    console.dir(err);
  }
}

// async function cacheAuthAsync(authState) {
//   return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
// }

// export async function getCachedAuthAsync() {
//   let value = await AsyncStorage.getItem(StorageKey);
//   let authState = JSON.parse(value);
//   console.log('getCachedAuthAsync', authState);
//   if (authState) {
//     if (checkIfTokenExpired(authState)) {
//       return refreshAuthAsync(authState);
//     } else {
//       return authState;
//     }
//   }
//   return null;
// }

// function checkIfTokenExpired({ accessTokenExpirationDate }) {
//   return new Date(accessTokenExpirationDate) < new Date();
// }

// export async function signOutAsync({ accessToken }) {
//   try {
//     await AppAuth.revokeAsync(config, {
//       token: accessToken,
//       isClientIdProvided: true,
//     });
//     await AsyncStorage.removeItem(StorageKey);
//     return null;
//   } catch (e) {
//     alert(`Failed to revoke token: ${e.message}`);
//   }
// }
