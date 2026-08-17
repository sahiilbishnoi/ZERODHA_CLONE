 import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/verify", { withCredentials: true })
      .then(() => {
        setIsAuthenticated(true);
        setAuthChecked(true);
      })
      .catch(() => {
        window.location.href = "http://localhost:3001/login";
      });
  }, []);

  if (!authChecked) return <p>Loading...</p>;

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;