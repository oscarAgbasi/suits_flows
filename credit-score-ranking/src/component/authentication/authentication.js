// import React, { useState } from "react";

// import "./authentication.css";
// import LoginForm from "./loginForm";
// import CreditScore from "../component/dashboard/creditScore";
// import CreateAccount from "./createaccount";

// function Authentication() {
//   const [user, setUser] = useState({ name: "", email: "" });
//   const [error, setError] = useState("");

//   const Login = (details) => {
//     console.log("User details" + details);
//   };

//   const Logout = () => {
//     setUser({ name: "", email: "" });
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-content">
//       <div className="auth-container-logo">Report</div>
//       <div className="auth-container-card-root">
//         {user.email != "" ? (
//           <CreditScore Logout={Logout} />
//         ) : (
//           <LoginForm Login={Login} error={error} />
//         )}
//         {/* <div className="grid-item">
//         <CreateAccount/>
//       </div> */}
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Authentication;
