import React, { useState } from "react";
import "./dental_servicestyles.css";

const Dental = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
    insurance: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const payload = {
      name: formData.patientName,
      email: formData.email,
      phone: formData.phone,
      doctor: formData.doctor,
      appointment_date: formData.appointmentDate,
      appointment_time: formData.appointmentTime,
      service: "Dental",
      reason: formData.reason,
      insurance: formData.insurance,
    };

    try {
      const res = await fetch("http://localhost/MediMeet/php/bookings.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.status === "success") {
        setSuccess(true);
        setFormData({
          patientName: "",
          email: "",
          phone: "",
          doctor: "",
          appointmentDate: "",
          appointmentTime: "",
          reason: "",
          insurance: "",
        });
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="dental-body">
      <div className="dental-container">
        <div className="dental-header">
          <h1>Our Medical Specialists</h1>
          <p>Expert care from experienced professionals</p>
        </div>

        <div className="dental-doctors-grid">
          
          <div className="dental-doctor-card">
            <div className="dental-doctor-header">
              <div className="dental-doctor-avatar">👨‍⚕️</div>
              <div className="dental-doctor-info">
                <h3>Dr. Michael Chen</h3>
                <div className="dental-specialty">Dental Specialist</div>
              </div>
            </div>
            <div className="dental-qualifications">
              <h4>Qualifications</h4>
              <div className="dental-qualification-tags">
                <span className="dental-tag">DDS</span>
                <span className="dental-tag">Oral Surgery</span>
                <span className="dental-tag">Cosmetic Dentistry</span>
                <span className="dental-tag">Implantology</span>
              </div>
            </div>
            <div className="dental-about">
              <h4>About</h4>
              <p>Dr. Chen specializes in comprehensive dental care with over 15 years of experience. He focuses on preventive care, advanced implant procedures, and cosmetic dentistry to help patients achieve optimal oral health and beautiful smiles.</p>
            </div>
            <div className="dental-experience">
              <div className="dental-experience-item">
                <div className="dental-experience-number">15+</div>
                <div className="dental-experience-label">Years Experience</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">2500+</div>
                <div className="dental-experience-label">Procedures</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">98%</div>
                <div className="dental-experience-label">Success Rate</div>
              </div>
            </div>
          </div>

          
          <div className="dental-doctor-card">
            <div className="dental-doctor-header">
              <div className="dental-doctor-avatar">👩‍⚕️</div>
              <div className="dental-doctor-info">
                <h3>Dr. Sarah Rodriguez</h3>
                <div className="dental-specialty">Orthopedic Surgeon</div>
              </div>
            </div>
            <div className="dental-qualifications">
              <h4>Qualifications</h4>
              <div className="dental-qualification-tags">
                <span className="dental-tag">MD</span>
                <span className="dental-tag">Orthopedic Surgery</span>
                <span className="dental-tag">Sports Medicine</span>
                <span className="dental-tag">Joint Replacement</span>
              </div>
            </div>
            <div className="dental-about">
              <h4>About</h4>
              <p>Dr. Rodriguez is a board-certified orthopedic surgeon specializing in bone, joint, and musculoskeletal conditions. She uses innovative treatment approaches to restore mobility and improve quality of life for her patients.</p>
            </div>
            <div className="dental-experience">
              <div className="dental-experience-item">
                <div className="dental-experience-number">12+</div>
                <div className="dental-experience-label">Years Experience</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">1800+</div>
                <div className="dental-experience-label">Surgeries</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">96%</div>
                <div className="dental-experience-label">Success Rate</div>
              </div>
            </div>
          </div>

          
          <div className="dental-doctor-card">
            <div className="dental-doctor-header">
              <div className="dental-doctor-avatar">👨‍⚕️</div>
              <div className="dental-doctor-info">
                <h3>Dr. James Wilson</h3>
                <div className="dental-specialty">Diagnostic Radiologist</div>
              </div>
            </div>
            <div className="dental-qualifications">
              <h4>Qualifications</h4>
              <div className="dental-qualification-tags">
                <span className="dental-tag">MD</span>
                <span className="dental-tag">Radiology</span>
                <span className="dental-tag">MRI Specialist</span>
                <span className="dental-tag">CT Imaging</span>
              </div>
            </div>
            <div className="dental-about">
              <h4>About</h4>
              <p>Dr. Wilson is an expert in advanced diagnostic imaging with cutting-edge technology. He provides accurate diagnoses and detailed treatment planning using state-of-the-art MRI, CT, and other imaging modalities.</p>
            </div>
            <div className="dental-experience">
              <div className="dental-experience-item">
                <div className="dental-experience-number">18+</div>
                <div className="dental-experience-label">Years Experience</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">10000+</div>
                <div className="dental-experience-label">Scans Read</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">99%</div>
                <div className="dental-experience-label">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Doctor 4 */}
          <div className="dental-doctor-card">
            <div className="dental-doctor-header">
              <div className="dental-doctor-avatar">👩‍⚕️</div>
              <div className="dental-doctor-info">
                <h3>Dr. Emily Johnson</h3>
                <div className="dental-specialty">Oral & Maxillofacial Surgeon</div>
              </div>
            </div>
            <div className="dental-qualifications">
              <h4>Qualifications</h4>
              <div className="dental-qualification-tags">
                <span className="dental-tag">DDS</span>
                <span className="dental-tag">MD</span>
                <span className="dental-tag">Facial Surgery</span>
                <span className="dental-tag">TMJ Disorders</span>
              </div>
            </div>
            <div className="dental-about">
              <h4>About</h4>
              <p>Dr. Johnson combines dental and medical expertise to treat complex facial and jaw conditions. She specializes in reconstructive surgery, TMJ disorders, and advanced dental implant procedures.</p>
            </div>
            <div className="dental-experience">
              <div className="dental-experience-item">
                <div className="dental-experience-number">14+</div>
                <div className="dental-experience-label">Years Experience</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">1200+</div>
                <div className="dental-experience-label">Surgeries</div>
              </div>
              <div className="dental-experience-item">
                <div className="dental-experience-number">97%</div>
                <div className="dental-experience-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dental-booking-card">
          <h3>Book an Appointment</h3>
          <form id="bookingForm" onSubmit={handleSubmit}>
            <div className="dental-form-group">
              <label htmlFor="patientName">Full Name *</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="dental-form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="dental-form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="dental-form-group dental-doctor-select">
              <label htmlFor="doctor">Select Doctor *</label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Choose a doctor...</option>
                <option value="Dr. Michael Chen">Dr. Michael Chen - Dental Specialist</option>
                <option value="Dr. Sarah Rodriguez">Dr. Sarah Rodriguez - Orthopedic Surgeon</option>
                <option value="Dr. James Wilson">Dr. James Wilson - Diagnostic Radiologist</option>
                <option value="Dr. Emily Johnson">Dr. Emily Johnson - Oral & Maxillofacial Surgeon</option>
              </select>
            </div>

            <div className="dental-form-group">
              <label htmlFor="appointmentDate">Preferred Date *</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="dental-form-group">
              <label htmlFor="appointmentTime">Preferred Time *</label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
              >
                <option value="">Select time...</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>

            <div className="dental-form-group">
              <label htmlFor="reason">Reason for Visit</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Please describe your symptoms or reason for the appointment..."
              />
            </div>

            <div className="dental-form-group">
              <label htmlFor="insurance">Insurance Provider</label>
              <input
                type="text"
                id="insurance"
                name="insurance"
                value={formData.insurance}
                onChange={handleChange}
                placeholder="Enter your insurance provider"
              />
            </div>

            <button type="submit" className="dental-book-btn">Book Appointment</button>

            {success && (
              <div className="dental-success-message">
                Thank you! Your appointment request has been submitted.
              </div>
            )}
            {error && (
              <div className="dental-error-message" style={{ color: "red", marginTop: "1em" }}>
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dental;
