import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Layout from './Layout/Layout';
import "./loginForm.css";

function LoginForm() {
  const [loginDetails, setloginDetails] = useState({ email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  //const { login } = React.useContext(useAuth);

  const submitHandler = (e) => {
    e.preventDefault();    
    console.log("submit button clicked");
    auth.login('James');
  };

  const handleEmailChange = (e) => {
    setloginDetails({ ...loginDetails, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setloginDetails({ ...loginDetails, password: e.target.value });
  };

  const clickForgotPassword = () => {
    console.log("forgot password");
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const clickSignUp = () => {
    console.log('Sign up clicked');
    navigate("/signup");
  }
  return (
    <Layout>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <span>Login into your account</span>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleEmailChange}
              value={loginDetails.email}
            />
          </div>
          <div className="form-group">
            <div className="form-group-clickable">
              <label htmlFor="name">Password</label>
              <div
                className="form-group-clickable-forgot"
                onClick={clickForgotPassword}
              >
                Forgot your password?
              </div>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
              value={loginDetails.password}
            />
          </div>
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="isChecked"
              name="isChecked"
              value="isChecked"
              checked={isChecked}
              onChange={handleOnChange}
            />
            Remember my email
          </div>
          <input
            className="form-inner-btn"
            type="submit"
            value="Continue"
          ></input>
        </div>
      </form>
      <div className="redirect-group">
        <p>Don't have an account? < span onClick={clickSignUp}>Sign up</span></p>
      </div>
    </Layout>
  );
}

export default LoginForm;
