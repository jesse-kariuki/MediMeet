import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


    
const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/MediMeet/php/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed. Try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <p className="auth-subtext">
        Create an account or <a href="/login">Sign in</a>
      </p>
      <form onSubmit={handleSignup} className="auth-form">
        <label>Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Username</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="auth-checkbox">
          <input type="checkbox" id="promo" />
          <label htmlFor="promo">
            I do not want to receive emails with advertising, news, suggestions or marketing promotions
          </label>
        </div>

        <button type="submit" className="auth-btn">
          Sign up
        </button>
      </form>
      <p className="auth-terms">
        By signing up you are accepting our terms of service and privacy policy
      </p>
    </div>
  );
}

export default SignupPage;
