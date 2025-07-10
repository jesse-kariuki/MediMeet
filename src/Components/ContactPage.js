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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const res = await fetch("http://localhost/MediMeet/php/feedback.php", {
        method: "POST",
        body: formDataObj,
      });

      const result = await res.json();
      
      if (result.status === "success") {
        // Topic-specific response messages
        const topicResponses = {
          "General Inquiry": "Thank you for your inquiry! We'll respond within 24 hours.",
          "Support": "Support request received! Our team will contact you shortly.",
          "Feedback": "Thank you for your valuable feedback! We appreciate your input.",
          "Appointment": "Appointment request received! We'll confirm your booking soon.",
          "": "Thank you for contacting us!" // Default fallback
        };

        setSubmitStatus({ 
          success: true, 
          message: topicResponses[formData.topic] || topicResponses[""]
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          topic: "",
          message: ""
        });
      } else {
        setSubmitStatus({ 
          success: false, 
          message: result.message || "Submission failed. Please try again." 
        });
      }
    } catch (err) {
      console.error("Feedback error:", err);
      setSubmitStatus({ 
        success: false, 
        message: "Network error. Please check your connection." 
      });
    } finally {
      setIsSubmitting(false);
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
          <p className="description">
            We'd love to hear from you. Fill out the form and we'll be in touch soon.
          </p>

          {/* Status Message - Now shows topic-specific responses */}
          {submitStatus.message && (
            <div className={`alert ${submitStatus.success ? "alert-success" : "alert-error"}`}>
              {submitStatus.message}
            </div>
          )}

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
                  minLength="2"
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
                  minLength="2"
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
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
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
                  pattern="[0-9]{10,15}"
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
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Appointment">Appointment</option>
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
                minLength="10"
              ></textarea>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I accept the terms</label>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
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