import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from './Layout/Layout';
import "./loginForm.css";


function CreateAccount() {
  const [signUpDetails, setsignUpDetails] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
  
    console.log("submit button clicked");
    //Login(loginDetails);
  };
  
  const handleEmailChange = (e) => {
    //setloginDetails({ ...loginDetails, email: e.target.value });
  };
  
  const handlePasswordChange = (e) => {
    //setloginDetails({ ...loginDetails, password: e.target.value });
  };
  
  const clickLogin = () => {
    console.log("Sign up clicked");
    navigate("/login");
  };

  return (
    <Layout>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <span>Create your account</span>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleEmailChange}
              value={signUpDetails.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Confirm Email Address</label>
            <input
              type="text"
              name="email"
              id="confirm-email"
              onChange={handleEmailChange}
              value={signUpDetails.email}
            />
          </div>
          <div className="form-group">
            <div className="form-group-clickable">
              <label htmlFor="name">Password</label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
              value={signUpDetails.password}
            />
          </div>
          <input
            className="form-inner-btn"
            type="submit"
            value="Continue"
          ></input>
        </div>
      </form>
      <div className="redirect-group">
        <p>
          Have an account? <span onClick={clickLogin}>Sign in</span>
        </p>
      </div>
    </Layout>
  );
}

export default CreateAccount;
