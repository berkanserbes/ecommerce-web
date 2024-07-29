import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "@pages/Auth/Register";
import Login from "@pages/Auth/Login";
import PrivateRoute from "./utils/router/PrivateRoute";
import AdminRoute from "./utils/router/AdminRoute";
import AdminDashboard from "@pages/Admin/AdminDasboard";
import Home from "@pages/Home/Home";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route
        element={
          <AdminRoute
            isAuthenticated={isAuthenticated}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
          />
        }
      >
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={
          <Login
            setIsAuthenticated={setIsAuthenticated}
            setIsAdmin={setIsAdmin}
          />
        }
      />
    </Routes>
  );
};

export default App;
