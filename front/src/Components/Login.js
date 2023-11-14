import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './AuthProvider'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setIsAuthenticated, setToken, setRefreshToken } = useContext(AuthContext);  // get the new setters
  const navigate = useNavigate();

  const handleTokenRefresh = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post(`${process.env.REACT_APP_HOST}/refresh-token`, {
        refreshToken,
      });
      
      localStorage.setItem("token", response.data.accessToken);
      const expirationTime = new Date().getTime() + response.data.expiresIn * 1000;
      localStorage.setItem("tokenExpirationTime", expirationTime);
    } catch (error) {
      console.error("Token Refresh Error:", error);

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/login`, {
        email,
        pwd: password, // replace 'pwd' with 'password'
      });

      console.log('Login Response:', response.data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      const expirationTime = new Date().getTime() + response.data.expiresIn * 1000;
      localStorage.setItem("tokenExpirationTime", expirationTime);
      setToken(response.data.token);  // Set token in state
      setRefreshToken(response.data.refreshToken); // Set refresh token in state

      setIsAuthenticated(true); 
      navigate("/admin"); 
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };
  useEffect(() => {

    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    const currentTime = new Date().getTime();
    if (currentTime > tokenExpirationTime) {
      handleTokenRefresh();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login" type="submit">Login</button>
    </form>
  );
};

export default Login;


