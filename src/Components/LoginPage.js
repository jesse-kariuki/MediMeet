// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login validation logic here
    navigate("/home"); // Redirect to home after login
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <p className="auth-subtext">
        Welcome back! Not a member? <a href="/signup">Sign up</a>
      </p>
      <form onSubmit={handleLogin} className="auth-form">
        <label>Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

