import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "../component/authentication/loginForm";
import CreateAccount from "../component/authentication/createaccount";

// export default authRoute [
//     <Route path='/' element ={<Authentication/>}/>,
//     <Route path="/login" element={<LoginForm/>} />,
//     <Route path="/create" element={<CreateAccount/>} />
// ];

const authRoute = [
  {
    path: "/login",
    component: <LoginForm/>,
    exact: true,
  },
  {
    path: "/create",
    component: <CreateAccount/>,
    exact: true,
  },
];

export default authRoute;
