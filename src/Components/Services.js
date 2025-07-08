import React from "react";

const services = [
  {
    img: "Teeth.png",
    title: "Dental Treatments",
    desc: "Comprehensive dental care including cleaning, fillings, root canals, and cosmetic procedures to keep your smile healthy and bright."
  },
  {
    img: "Bone.png",
    title: "Bone Treatments",
    desc: "Specialized orthopedic care for fractures, joint pain, arthritis, and bone deformities using advanced diagnostic and treatment techniques."
  },
  {
    img: "Diagnosis.png",
    title: "Diagnosis",
    desc: "Accurate and timely diagnosis through lab tests, imaging, and expert evaluations to ensure effective treatment planning."
  },
  {
    img: "Cardiology.png",
    title: "Cardiology",
    desc: "Expert heart care including checkups, ECG, blood pressure monitoring, and management of heart conditions like hypertension and arrhythmia."
  },
  {
    img: "Surgery.png",
    title: "Surgery",
    desc: "Safe and modern surgical procedures, both major and minor, performed by skilled professionals in well-equipped facilities."
  },
  {
    img: "Eye.png",
    title: "Eye Care",
    desc: "Full vision services including eye exams, treatment of infections, vision correction, and referrals for surgical care when needed."
  },
];

const Services = () => (
  <section className="services-section">
    <h2 className="section-title">Services we provide</h2>
    <p className="section-subtitle">
      We offer a range of medical services tailored to your health needs and convenience.
    </p>
    <div className="services-grid">
      {services.map((s, index) => (
        <div key={index} className="service-card">
          <img src={`Images/${s.img}`} alt={s.title} />
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
