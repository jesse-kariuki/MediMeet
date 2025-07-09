import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost/MediMeet/php/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      alert("Login successful!");
      navigate("/home");
    } else {
      setError(data.message || "Invalid login.");
    }
  } catch (err) {
    setError("Network error. Try again later.");
    console.error("Login error:", err);
  }
};


  return (
    <div className="auth-container">
      <h2>Login</h2>
      <p className="auth-subtext">
        Welcome back! Not a member? <a href="/signup">Sign up</a>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}

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
