import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./blog.css"; // Assuming you have a CSS file for styling
const BlogsPage = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <img src="/Images/logo.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div className="auth">
          <Link to="/signup" className="signup">Sign Up</Link>
          <Link to="/login" className="login">Login</Link>
        </div>
      </nav>

      <h1 className="blogs-h1" style={{ textAlign: "center", margin: "40px 0", color: "#007e85" }}>
        Medical Blog Posts
      </h1>

      <div className="blog-container" style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        padding: "20px"
      }}>
        {[
          {
            title: "Top 10 Ways to Enhance Oral Hygiene",
            date: "May 25, 2025",
            snippet: "Explore practical and dentist-approved tips to improve your oral hygiene habits and maintain a healthy smile."
          },
          {
            title: "How Sleep Affects Your Mental Health",
            date: "June 5, 2025",
            snippet: "Learn the surprising ways your sleep patterns influence anxiety, depression, and long-term cognitive performance."
          },
          {
            title: "Why Regular Checkups Matter",
            date: "June 15, 2025",
            snippet: "A simple checkup can catch diseases early. Discover what doctors look for during routine exams."
          },
          {
            title: "Nutrition Tips for a Healthy Heart",
            date: "July 1, 2025",
            snippet: "Small dietary changes can have a big impact on your cardiovascular health. Here’s what to eat and avoid."
          },
          {
            title: "Understanding Diabetes Prevention",
            date: "July 6, 2025",
            snippet: "Prevent type 2 diabetes with lifestyle strategies that work. Learn what to monitor and how to adjust your habits."
          }
        ].map((blog, index) => (
          <div key={index} className="blog-card" style={{
            backgroundColor: "#fff",
            padding: "20px",
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div className="blog-title" style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#007e85"
            }}>{blog.title}</div>
            <div className="blog-date" style={{
              fontSize: "14px",
              color: "#888",
              marginBottom: "12px"
            }}>{blog.date}</div>
            <div className="blog-snippet" style={{
              fontSize: "15px",
              marginBottom: "20px"
            }}>{blog.snippet}</div>
            <div className="read-more" style={{
              color: "#007e85",
              fontWeight: "bold",
              cursor: "pointer"
            }}>Read this post</div>
          </div>
        ))}
      </div>

      <section className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default BlogsPage;
