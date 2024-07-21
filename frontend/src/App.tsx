import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "@pages/Auth/Register";
import Login from "@pages/Auth/Login";
import PrivateRoute from "./utils/router/PrivateRoute";
import Home from "@pages/Home/Home";

const App: React.FC = () => {
  // Burada kullanıcı giriş durumunu kontrol eden bir state olabilir
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
    </Routes>
  );
};

export default App;
