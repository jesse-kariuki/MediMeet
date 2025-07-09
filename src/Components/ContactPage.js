import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./contacts.css";
import "./home.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "",
  message: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Submitting form data:", formData); // ✅ Log before sending

  try {
    const res = await fetch("http://localhost/MediMeet/php/feedback.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log("Response:", result); // ✅ Log response from server

    if (result.status === "success") {
      alert("Feedback submitted!");
    } else {
      alert(result.message || "Submission failed");
    }
  } catch (err) {
    console.error("Error:", err); // ✅ See what went wrong
    alert("Something went wrong.");
  }
};


  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <img src="/Images/logo.png" alt="Logo" />
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className="auth">
            <Link to="/signup" className="signup">Sign Up</Link>
            <Link to="/login" className="login">Login</Link>
          </div>
        </nav>
      </header>

      <div className="main-container">
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Your Health, <br /> Our Mission</h1>
                <p>Providing quality, personalized care to every patient, every time.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-container">
          <h2>Contact Us</h2>
          <p className="description">We’d love to hear from you. Fill out the form and we’ll be in touch soon.</p>

         <form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group">
      <label>First name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
        required
      />
    </div>
    <div className="form-group">
      <label>Last name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
        required
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
    </div>
    <div className="form-group">
      <label>Phone number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
      />
    </div>
  </div>

  <div className="form-group">
    <label>Choose a topic</label>
    <select
      name="topic"
      value={formData.topic}
      onChange={handleChange}
      required
    >
      <option value="">Select one...</option>
      <option>General Inquiry</option>
      <option>Support</option>
      <option>Feedback</option>
    </select>
  </div>

  <div className="form-group">
    <label>Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Type your message..."
      required
    ></textarea>
  </div>

  <div className="checkbox-group">
    <input type="checkbox" id="terms" required />
    <label htmlFor="terms">I accept the terms</label>
  </div>

  <button type="submit" className="submit-btn">Submit</button>
</form>

          <div className="divider"></div>

          <div className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
