import { Route, Routes } from "react-router-dom";
import "./App.css";
import RouterProvider from "./routes/RouterProvider";
import LoginForm from "./component/authentication/loginForm";
import CreateAccount from "./component/authentication/createaccount";
import DashBoard from "./component/dashboard/dashBoard";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    // </Routes>
    // <div className="App">
    //   <RouterProvider/>
    // </div>
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route
            path="/dashbord"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div> Not Found </div>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
