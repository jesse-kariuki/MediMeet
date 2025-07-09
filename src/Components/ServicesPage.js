import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./services.css";


const ServicesPage = () => {
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
            <form className="appointment-form">
              <h3 className="appointment-h3">General Appointment</h3>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email address *" required />
              <select required>
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
              <select required>
                <option value="">8:00AM</option>
                <option>10:00AM</option>
                <option>2:00PM</option>
                <option>4:00PM</option>
              </select>
              <button type="submit" className="btn btn-primary">Book Appointment</button>
            </form>
          </div>
        </div>
      </section>

      <section className="find-doctor">
        <h2>Find A Doctor</h2>
        <div className="search-bar">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Speciality" />
          <label className="switch">
          </label>
          <button className="btn btn-primary">Search</button>
        </div>
      </section>

      <div className="services-offered">Services we Provide</div>
      <div className="services-desc">
        Our comprehensive healthcare services combine advanced medical technology with personalized patient care to deliver exceptional treatment outcomes across multiple specialties —<br /> all from the comfort of your home.
      </div>

      <div className="services-container">
        {[
          {
            img: "Teeth.png",
            title: "Dental treatment",
            desc: "Comprehensive oral healthcare including preventive cleanings, restorative procedures, cosmetic dentistry, and advanced implant solutions.",
            link: "/dental"
          },
          {
            img: "Bone.png",
            title: "Bones Treatment",
            desc: "Specialized orthopedic care for bone, joint, and musculoskeletal conditions.",
            link: "/bones"
          },
          {
            img: "Diagnosis.png",
            title: "Diagnosis",
            desc: "Advanced diagnostic imaging using cutting-edge technology.",
            link: "/diagnosis"
          },
          {
            img: "Eye.png",
            title: "Eye Care",
            desc: "Expert ophthalmologists offering advanced diagnostics and treatments.",
            link: "/eye"
          },
          {
            img: "Cardiology.png",
            title: "Cardiology",
            desc: "Specialists in diagnosing and managing heart conditions.",
            link: "/cardiology"
          },
          {
            img: "Surgery.png",
            title: "Surgery",
            desc: "Skilled surgeons providing a range of procedures with precision.",
            link: "/surgery"
          }
        ].map((service, index) => (
          <div key={index} className="service-card">
            <img src={`/Images/${service.img}`} alt={service.title} />
            <div className="service-name">{service.title}</div>
            <div className="about">{service.desc}</div>
            <div className="socials-row">
              <span className="text-with-arrow">
                <Link to={service.link}>Learn More<span className="arrow">→</span></Link>
              </span>
            </div>
          </div>
        ))}
      </div>

      <section className="faq">
        <h2>FAQ</h2>
        <p className="faq-subtitle">Answers to common questions about our hospital services and patient care</p>
        <div className="faq-cards">
          {[
            {
              q: "What insurance plans do you accept?",
              a: "We accept most major insurance providers. Contact our billing department for a full list."
            },
            {
              q: "Can I schedule appointments online?",
              a: "Yes, you can book consultations through our website or mobile app."
            },
            {
              q: "What are your visiting hours?",
              a: "Visiting hours are from 10 AM to 8 PM daily. ICU access is limited to designated times."
            },
            {
              q: "Do you offer emergency services?",
              a: "Yes, our emergency department operates 24/7 for all urgent medical needs."
            },
            {
              q: "Are specialists available for consultation?",
              a: "We have a wide range of specialists in cardiology, neurology, orthopedics, and more."
            },
            {
              q: "How do I get my medical records?",
              a: "You can request your records through our patient portal or at the records department."
            }
          ].map((item, index) => (
            <div key={index} className="faq-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
