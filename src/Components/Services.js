import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./services.css";

const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/medimeet/php/bookings.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Appointment booked successfully!");
      setFormData({ name: "", email: "", service: "", time: "" });
    } else {
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <>
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

      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Health, <br /> Our Mission</h1>
              <p>Providing quality, personalized care to every patient, every time.</p>
            </div>
            <form className="appointment-form" onSubmit={handleBooking}>
              <h3 className="appointment-h3">General Appointment</h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address *"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Please Select</option>
                <option>General Consultation</option>
                <option>Cardiology</option>
                <option>Dental</option>
                <option>Dermatology</option>
                <option>Eye</option>
                <option>Neurology</option>
                <option>Physiotherapy</option>
                <option>Orthopedic</option>
              </select>
              <select
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">Select Time</option>
                <option>8:00AM</option>
                <option>10:00AM</option>
                <option>2:00PM</option>
                <option>4:00PM</option>
              </select>
              <button type="submit" className="btn btn-primary">Book Appointment</button>
            </form>
          </div>
        </div>
      </section>

      {/* Other sections like "Find A Doctor", "Services We Provide", etc. remain unchanged */}
      <Footer />
    </>
  );
};

export default ServicesPage;
