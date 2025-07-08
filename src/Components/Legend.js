import React from "react";
import "./home.css";
const Legend = () =>(
    <div className="legend">
    <div className="intro">
      <p>
        Providing Quality <span className="healthcare">Healthcare</span> For A<br />
        <span className="bright_healthy">Brighter</span> And <span className="bright_healthy">Healthy</span> Future
      </p>
      <img src="/Images/hospital.png" alt="" className="healthcare-image" />
    </div>
    <div className="hero-text">
      <p>
        Our platform connects you with qualified healthcare professionals for<br />
        in-person or virtual consultations. Whether you need a quick check-up<br />
        or a specialist, schedule appointments easily and securely —<br />
        all in just a few clicks.
      </p>
    </div>
  </div>
);
export default Legend;