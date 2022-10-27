import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth() || {};
  if (!user) {
    console.log('User object empty');
    // user is not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
};