import React from "react";
import "./home.css";
const teamMembers = [
  {
    img: "johncarter.png",
    name: "Anne Carter",
    role: "CEO & Co-Founder",
    about: "Visionary leader with fifteen years healthcare innovation experience. Founded organization revolutionizing patient care through cutting-edge technology and compassionate service."
  },
  {
    img: "sophiemoore.png",
    name: "Sophie Moore",
    role: "DENTAL SPECIALIST",
    about: "Exceptional dental specialist combining technical precision with gentle patient approach. Advanced training in restorative cosmetic dentistry and implantology."
  },
  {
    img: "mattcannon.png",
    name: "Matt Cannon",
    role: "Orthopedic",
    about: "Board-certified orthopedic surgeon specializing sports medicine and joint reconstruction. Extensive experience treating athletes using surgical and non-surgical approaches."
  },
  {
    img: "andysmith.png",
    name: "Andy Smith",
    role: "Neurosurgeon",
    about: "Highly skilled neurosurgeon expert in complex brain and spinal procedures. Subspecialty training in minimally invasive techniques treating brain tumors to spinal disorders."
  },
  {
    img: "lilywoods.png",
    name: "Lily Woods",
    role: "CARDIOLOGIST",
    about: "Interventional cardiologist preventing treating heart disease through innovative procedures and lifestyle medicine. Expertise includes cardiac catheterization and heart failure management."
  },
  {
    img: "patrick.png",
    name: "Patrick Meyer",
    role: "ONCOLOGIST",
    about: "Medical oncologist specializing personalized cancer treatment and precision medicine. Comprehensive approach combining latest therapeutic advances with compassionate patient care."
  }
];

const Team = () => (
  <div className="services-provided">
    <h2 className="services-offered">Meet our team</h2>
    <div className="services-desc">
      Our experienced board combines medical expertise with strategic leadership, guiding our organization's commitment to innovative healthcare delivery and exceptional patient outcomes across all specialties.
    </div>
    <div className="team-cards">
      {teamMembers.map((member, index) => (
        <div key={index} className="employee-card">
          <img src={`Images/${member.img}`} alt={member.name} />
          <div className="employee-name">{member.name}</div>
          <div className="role">{member.role}</div>
          <div className="about">{member.about}</div>
          <div className="socials-row">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="socials-container">
                <div className="socials"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
