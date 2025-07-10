
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./blog.css";

const BlogsPage = () => {
  const blogs = [
    {
      id: 0,
      title: "Top 10 Ways to Enhance Oral Hygiene",
      date: "May 25, 2025",
      snippet: "Explore practical and dentist-approved tips to improve your oral hygiene habits and maintain a healthy smile."
    },
    {
      id: 1,
      title: "How Sleep Affects Your Mental Health",
      date: "June 5, 2025",
      snippet: "Learn the surprising ways your sleep patterns influence anxiety, depression, and long-term cognitive performance."
    },
    {
      id: 2,
      title: "Why Regular Checkups Matter",
      date: "June 15, 2025",
      snippet: "A simple checkup can catch diseases early. Discover what doctors look for during routine exams."
    },
    {
      id: 3,
      title: "Nutrition Tips for a Healthy Heart",
      date: "July 1, 2025",
      snippet: "Small dietary changes can have a big impact on your cardiovascular health. Here’s what to eat and avoid."
    },
    {
      id: 4,
      title: "Understanding Diabetes Prevention",
      date: "July 6, 2025",
      snippet: "Prevent type 2 diabetes with lifestyle strategies that work. Learn what to monitor and how to adjust your habits."
    }
  ];

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

      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-title">{blog.title}</div>
            <div className="blog-date">{blog.date}</div>
            <div className="blog-snippet">{blog.snippet}</div>
            <Link to={`/blogs/${blog.id}`} className="read-more">
              Read this post
            </Link>
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
