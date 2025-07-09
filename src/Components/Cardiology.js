import React from "react";
import "./cardiologystyles.css";

const Cardio = () => (
  <div className="cardio-body">
    <div className="cardio-container">
      <div className="cardio-header">
        <h1>Cardiology Specialists</h1>
        <p>Expert care for your heart and vascular health</p>
      </div>

      <div className="cardio-main-content">
        <div className="cardio-doctors-grid">

          {/* Doctor 1 */}
          <div className="cardio-doctor-card">
            <div className="cardio-doctor-header">
              <div className="cardio-doctor-avatar">👨‍⚕️</div>
              <div className="cardio-doctor-info">
                <h3>Dr. Arjun Patel</h3>
                <div className="cardio-specialty">Cardiologist</div>
              </div>
            </div>
            <div className="cardio-qualifications">
              <h4>Qualifications</h4>
              <div className="cardio-qualification-tags">
                <span className="cardio-tag">MD</span>
                <span className="cardio-tag">Cardiology</span>
                <span className="cardio-tag">Interventional</span>
                <span className="cardio-tag">Echocardiography</span>
              </div>
            </div>
            <div className="cardio-about">
              <h4>About</h4>
              <p>Dr. Patel brings 20 years of experience in managing cardiovascular diseases. His focus lies in preventive cardiology and minimally invasive procedures.</p>
            </div>
            <div className="cardio-experience">
              <div className="cardio-experience-item">
                <div className="cardio-experience-number">20+</div>
                <div className="cardio-experience-label">Years Experience</div>
              </div>
              <div className="cardio-experience-item">
                <div className="cardio-experience-number">3000+</div>
                <div className="cardio-experience-label">Patients Treated</div>
              </div>
              <div className="cardio-experience-item">
                <div className="cardio-experience-number">99%</div>
                <div className="cardio-experience-label">Success Rate</div>
              </div>
            </div>
          </div>

         
          <div className="cardio-doctor-card">
            <div className="cardio-doctor-header">
              <div className="cardio-doctor-avatar">👩‍⚕️</div>
              <div className="cardio-doctor-info">
                <h3>Dr. Nadia Hassan</h3>
                <div className="cardio-specialty">Electrophysiologist</div>
              </div>
            </div>
            <div className="cardio-qualifications">
              <h4>Qualifications</h4>
              <div className="cardio-qualification-tags">
                <span className="cardio-tag">MD</span>
                <span className="cardio-tag">Electrophysiology</span>
                <span className="cardio-tag">Arrhythmia</span>
                <span className="cardio-tag">Pacemakers</span>
              </div>
            </div>
            <div className="cardio-about">
              <h4>About</h4>
              <p>Dr. Hassan specializes in diagnosing and treating heart rhythm disorders. She’s known for her precision and care in managing arrhythmias using modern technologies.</p>
            </div>
            <div className="cardio-experience">
              <div className="cardio-experience-item">
                <div className="cardio-experience-number">15+</div>
                <div className="cardio-experience-label">Years Experience</div>
              </div>
              <div className="cardio-experience-item">
                <div className="cardio-experience-number">2000+</div>
                <div className="cardio-experience-label">Procedures</div>
              </div>
              <div className="cardio-experience-item">
                <div className="cardio-experience-number">98%</div>
                <div className="cardio-experience-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cardio-booking-card">
          <h3>Book an Appointment</h3>
          <form id="cardioBookingForm">
            <div className="cardio-form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="cardio-form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="cardio-form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="cardio-form-group cardio-doctor-select">
              <label htmlFor="doctor">Select Doctor *</label>
              <select id="doctor" name="doctor" required>
                <option value="">Choose a doctor...</option>
                <option value="patel">Dr. Arjun Patel - Cardiologist</option>
                <option value="hassan">Dr. Nadia Hassan - Electrophysiologist</option>
              </select>
            </div>

            <div className="cardio-form-group">
              <label htmlFor="date">Preferred Date *</label>
              <input type="date" id="date" name="date" required />
            </div>

            <div className="cardio-form-group">
              <label htmlFor="time">Preferred Time *</label>
              <select id="time" name="time" required>
                <option value="">Select time...</option>
                <option value="09:00">9:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="13:00">1:00 PM</option>
                <option value="15:00">3:00 PM</option>
              </select>
            </div>

            <div className="cardio-form-group">
              <label htmlFor="symptoms">Symptoms / Reason</label>
              <textarea id="symptoms" name="symptoms" placeholder="Describe your concern..." />
            </div>

            <div className="cardio-form-group">
              <label htmlFor="insurance">Insurance Provider</label>
              <input type="text" id="insurance" name="insurance" />
            </div>

            <button type="submit" className="cardio-book-btn">Book Appointment</button>

            <div id="cardioSuccessMessage" className="cardio-success-message">
              Thank you! Your appointment request has been received. Our team will contact you shortly.
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Cardio;
