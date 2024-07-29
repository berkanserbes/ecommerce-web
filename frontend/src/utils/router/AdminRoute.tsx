import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface AdminRouteProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  setIsAdmin?: (isAdmin: boolean) => void;
}

const AdminRoute: React.FC<AdminRouteProps> = ({
  isAuthenticated,
  isAdmin,
}) => {
  if (isAuthenticated && isAdmin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
