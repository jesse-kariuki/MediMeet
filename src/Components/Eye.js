import React, { useState } from "react";
import "./eyestyles.css";

const Eye = () => {
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
      service: "Eye",
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
    <div className="eye-body">
      <div className="eye-container">
        <div className="eye-header">
          <h1>Eye Care Specialists</h1>
          <p>Comprehensive vision care from expert ophthalmologists</p>
        </div>

        <div className="eye-main-content">
          <div className="eye-doctors-grid">
            {/* Doctor cards - unchanged */}
            {/* Doctor 1 */}
            <div className="eye-doctor-card">
              <div className="eye-doctor-header">
                <div className="eye-doctor-avatar">👁️</div>
                <div className="eye-doctor-info">
                  <h3>Dr. Lisa Thompson</h3>
                  <div className="eye-specialty">Retinal Specialist</div>
                </div>
              </div>
              <div className="eye-qualifications">
                <h4>Qualifications</h4>
                <div className="eye-qualification-tags">
                  <span className="eye-tag">MD</span>
                  <span className="eye-tag">Ophthalmology</span>
                  <span className="eye-tag">Retinal Surgery</span>
                  <span className="eye-tag">Macular Degeneration</span>
                </div>
              </div>
              <div className="eye-about">
                <h4>About</h4>
                <p>Dr. Thompson specializes in diseases of the retina and vitreous with over 17 years of experience. She treats diabetic retinopathy, macular degeneration, and performs advanced retinal surgeries with precision.</p>
              </div>
              <div className="eye-experience">
                <div className="eye-experience-item">
                  <div className="eye-experience-number">17+</div>
                  <div className="eye-experience-label">Years Experience</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">3200+</div>
                  <div className="eye-experience-label">Procedures</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">96%</div>
                  <div className="eye-experience-label">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="eye-doctor-card">
              <div className="eye-doctor-header">
                <div className="eye-doctor-avatar">🔬</div>
                <div className="eye-doctor-info">
                  <h3>Dr. Michael Torres</h3>
                  <div className="eye-specialty">Corneal Specialist</div>
                </div>
              </div>
              <div className="eye-qualifications">
                <h4>Qualifications</h4>
                <div className="eye-qualification-tags">
                  <span className="eye-tag">MD</span>
                  <span className="eye-tag">Corneal Surgery</span>
                  <span className="eye-tag">Transplantation</span>
                  <span className="eye-tag">Refractive Surgery</span>
                </div>
              </div>
              <div className="eye-about">
                <h4>About</h4>
                <p>Dr. Torres is a board-certified corneal specialist with expertise in corneal transplantation and refractive surgery. He performs LASIK, PRK, and complex corneal procedures to restore vision.</p>
              </div>
              <div className="eye-experience">
                <div className="eye-experience-item">
                  <div className="eye-experience-number">14+</div>
                  <div className="eye-experience-label">Years Experience</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">2800+</div>
                  <div className="eye-experience-label">Surgeries</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">98%</div>
                  <div className="eye-experience-label">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="eye-doctor-card">
              <div className="eye-doctor-header">
                <div className="eye-doctor-avatar">🥽</div>
                <div className="eye-doctor-info">
                  <h3>Dr. Amanda Lee</h3>
                  <div className="eye-specialty">Glaucoma Specialist</div>
                </div>
              </div>
              <div className="eye-qualifications">
                <h4>Qualifications</h4>
                <div className="eye-qualification-tags">
                  <span className="eye-tag">MD</span>
                  <span className="eye-tag">Glaucoma</span>
                  <span className="eye-tag">Laser Surgery</span>
                  <span className="eye-tag">Drainage Devices</span>
                </div>
              </div>
              <div className="eye-about">
                <h4>About</h4>
                <p>Dr. Lee focuses on the diagnosis and treatment of glaucoma using advanced laser techniques and surgical interventions. She helps preserve vision through early detection and innovative treatment approaches.</p>
              </div>
              <div className="eye-experience">
                <div className="eye-experience-item">
                  <div className="eye-experience-number">19+</div>
                  <div className="eye-experience-label">Years Experience</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">4500+</div>
                  <div className="eye-experience-label">Treatments</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">94%</div>
                  <div className="eye-experience-label">Vision Preserved</div>
                </div>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="eye-doctor-card">
              <div className="eye-doctor-header">
                <div className="eye-doctor-avatar">👓</div>
                <div className="eye-doctor-info">
                  <h3>Dr. Kevin Park</h3>
                  <div className="eye-specialty">Pediatric Ophthalmologist</div>
                </div>
              </div>
              <div className="eye-qualifications">
                <h4>Qualifications</h4>
                <div className="eye-qualification-tags">
                  <span className="eye-tag">MD</span>
                  <span className="eye-tag">Pediatric Eye Care</span>
                  <span className="eye-tag">Strabismus</span>
                  <span className="eye-tag">Amblyopia</span>
                </div>
              </div>
              <div className="eye-about">
                <h4>About</h4>
                <p>Dr. Park specializes in children's eye care, treating conditions like lazy eye, crossed eyes, and congenital eye disorders. He provides comprehensive eye exams and specialized treatments for young patients.</p>
              </div>
              <div className="eye-experience">
                <div className="eye-experience-item">
                  <div className="eye-experience-number">16+</div>
                  <div className="eye-experience-label">Years Experience</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">6000+</div>
                  <div className="eye-experience-label">Young Patients</div>
                </div>
                <div className="eye-experience-item">
                  <div className="eye-experience-number">95%</div>
                  <div className="eye-experience-label">Treatment Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="eye-booking-card">
            <h3>Book Eye Care Appointment</h3>
            <form id="eye-booking-form" onSubmit={handleSubmit}>
              <div className="eye-form-group">
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

              <div className="eye-form-group">
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

              <div className="eye-form-group">
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

              <div className="eye-form-group eye-doctor-select">
                <label htmlFor="doctor">Select Eye Specialist *</label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a specialist...</option>
                  <option value="Dr. Lisa Thompson">Dr. Lisa Thompson - Retinal Specialist</option>
                  <option value="Dr. Michael Torres">Dr. Michael Torres - Corneal Specialist</option>
                  <option value="Dr. Amanda Lee">Dr. Amanda Lee - Glaucoma Specialist</option>
                  <option value="Dr. Kevin Park">Dr. Kevin Park - Pediatric Ophthalmologist</option>
                </select>
              </div>

              <div className="eye-form-group">
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

              <div className="eye-form-group">
                <label htmlFor="appointmentTime">Preferred Time *</label>
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select time...</option>
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>

              <div className="eye-form-group">
                <label htmlFor="reason">Reason for Visit</label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please describe your vision concerns or symptoms..."
                />
              </div>

              <div className="eye-form-group">
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

              <button type="submit" className="eye-book-btn">Book Appointment</button>

              {success && (
                <div className="eye-success-message">
                  ✅ Thank you! Your eye care appointment request has been submitted.
                </div>
              )}
              {error && (
                <div className="eye-error-message" style={{ color: "red", marginTop: "1em" }}>
                  ⚠️ {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
