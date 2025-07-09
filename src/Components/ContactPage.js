import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./contacts.css";
import "./home.css";

const ContactPage = () => {
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

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="form-group">
              <label>Choose a topic</label>
              <select required>
                <option value="">Select one...</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Type your message..." required></textarea>
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
