import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null); 
  const [refreshToken, setRefreshToken] = useState(null); 

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, token, setToken, refreshToken, setRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
