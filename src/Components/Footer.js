import React from "react";
import "./home.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/mission">Mission & Values</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/dental">Dental Care</a></li>
            <li><a href="/services/orthopedic">Orthopedic Surgery</a></li>
            <li><a href="/services/neurosurgery">Neurosurgery</a></li>
            <li><a href="/services/cardiology">Cardiology</a></li>
            <li><a href="/services/oncology">Oncology</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Patient Resources</h4>
          <ul>
            <li><a href="/appointment">Schedule Appointment</a></li>
            <li><a href="/portal">Patient Portal</a></li>
            <li><a href="/insurance">Insurance & Billing</a></li>
            <li><a href="/forms">Forms & Documents</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="contact-info">
            <p>📞 (555) 123-4567</p>
            <p>📧 info@healthcenter.com</p>
            <p>📍 123 Medical Drive<br />City, State 12345</p>
          </div>
          <div className="social-links">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
