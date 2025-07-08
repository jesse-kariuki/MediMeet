import React from "react";
import "./home.css";
const stats = [
  { num: "99", unit: "%", label: "Customer satisfaction" },
  { num: "15", unit: "k", label: "Online patients" },
  { num: "12", unit: "k", label: "Patients recovered" },
  { num: "240", unit: "%", label: "Company growth" },
];

const Stats = () => (
  <>
    <div className="results">Our results in numbers</div>
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <div className="number">
            {stat.num}
            <span className="unit">{stat.unit}</span>
          </div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </div>
  </>
);

export default Stats;
