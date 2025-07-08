import React from "react";
import "./home.css";
const testimonials = [
  {
    img: "patrick.png",
    stars: "★★★★☆",
    text: "The doctors and nurses were incredibly attentive and professional. I felt well cared for during my entire stay."
  },
  {
    img: "mattcannon.png",
    stars: "★★★★☆",
    text: "The hospital facilities are clean and modern. The staff explained every procedure clearly and patiently."
  },
  {
    img: "lilywoods.png",
    stars: "★★★★★",
    text: "From admission to discharge, everything was seamless. Thank you for the exceptional care and support!"
  }
];

const Testimonials = () => (
  <section className="services-section">
    <h2 className="section-title">What customers say</h2>
    <p className="section-subtitle">
      Discover what others have to say about their experience with us.
    </p>
    <div className="testimonial-cards">
      {testimonials.map((t, index) => (
        <div key={index} className="testimonial-card">
          <div className="stars">{t.stars}</div>
          <p>{t.text}</p>
          <img src={`Images/${t.img}`} alt="Customer" className="avatar" />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
