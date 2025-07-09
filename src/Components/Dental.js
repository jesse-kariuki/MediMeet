import React from "react";


const Dental = (
    <div className="container">
    <div className="header">
        <h1>Our Medical Specialists</h1>
        <p>Expert care from experienced professionals</p>
    </div>

    <div className="main-content">
        <div className="doctors-grid">
            <div className="doctor-card">
                <div className="doctor-header">
                    <div className="doctor-avatar">👨‍⚕️</div>
                    <div className="doctor-info">
                        <h3>Dr. Michael Chen</h3>
                        <div className="specialty">Dental Specialist</div>
                    </div>
                </div>
                
                <div className="qualifications">
                    <h4>Qualifications</h4>
                    <div className="qualification-tags">
                        <span className="tag">DDS</span>
                        <span className="tag">Oral Surgery</span>
                        <span className="tag">Cosmetic Dentistry</span>
                        <span className="tag">Implantology</span>
                    </div>
                </div>
                
                <div className="about">
                    <h4>About</h4>
                    <p>Dr. Chen specializes in comprehensive dental care with over 15 years of experience. He focuses on preventive care, advanced implant procedures, and cosmetic dentistry to help patients achieve optimal oral health and beautiful smiles.</p>
                </div>
                
                <div className="experience">
                    <div className="experience-item">
                        <div className="experience-number">15+</div>
                        <div className="experience-label">Years Experience</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">2500+</div>
                        <div className="experience-label">Procedures</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">98%</div>
                        <div className="experience-label">Success Rate</div>
                    </div>
                </div>
            </div>

            <div className="doctor-card">
                <div className="doctor-header">
                    <div className="doctor-avatar">👩‍⚕️</div>
                    <div className="doctor-info">
                        <h3>Dr. Sarah Rodriguez</h3>
                        <div className="specialty">Orthopedic Surgeon</div>
                    </div>
                </div>
                
                <div className="qualifications">
                    <h4>Qualifications</h4>
                    <div className="qualification-tags">
                        <span className="tag">MD</span>
                        <span className="tag">Orthopedic Surgery</span>
                        <span className="tag">Sports Medicine</span>
                        <span className="tag">Joint Replacement</span>
                    </div>
                </div>
                
                <div className="about">
                    <h4>About</h4>
                    <p>Dr. Rodriguez is a board-certified orthopedic surgeon specializing in bone, joint, and musculoskeletal conditions. She uses innovative treatment approaches to restore mobility and improve quality of life for her patients.</p>
                </div>
                
                <div className="experience">
                    <div className="experience-item">
                        <div className="experience-number">12+</div>
                        <div className="experience-label">Years Experience</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">1800+</div>
                        <div className="experience-label">Surgeries</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">96%</div>
                        <div className="experience-label">Success Rate</div>
                    </div>
                </div>
            </div>

            <div className="doctor-card">
                <div className="doctor-header">
                    <div className="doctor-avatar">👨‍⚕️</div>
                    <div className="doctor-info">
                        <h3>Dr. James Wilson</h3>
                        <div className="specialty">Diagnostic Radiologist</div>
                    </div>
                </div>
                
                <div className="qualifications">
                    <h4>Qualifications</h4>
                    <div className="qualification-tags">
                        <span className="tag">MD</span>
                        <span className="tag">Radiology</span>
                        <span className="tag">MRI Specialist</span>
                        <span className="tag">CT Imaging</span>
                    </div>
                </div>
                
                <div className="about">
                    <h4>About</h4>
                    <p>Dr. Wilson is an expert in advanced diagnostic imaging with cutting-edge technology. He provides accurate diagnoses and detailed treatment planning using state-of-the-art MRI, CT, and other imaging modalities.</p>
                </div>
                
                <div className="experience">
                    <div className="experience-item">
                        <div className="experience-number">18+</div>
                        <div className="experience-label">Years Experience</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">10000+</div>
                        <div className="experience-label">Scans Read</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">99%</div>
                        <div className="experience-label">Accuracy Rate</div>
                    </div>
                </div>
            </div>

            <div className="doctor-card">
                <div className="doctor-header">
                    <div className="doctor-avatar">👩‍⚕️</div>
                    <div className="doctor-info">
                        <h3>Dr. Emily Johnson</h3>
                        <div className="specialty">Oral & Maxillofacial Surgeon</div>
                    </div>
                </div>
                
                <div className="qualifications">
                    <h4>Qualifications</h4>
                    <div className="qualification-tags">
                        <span className="tag">DDS</span>
                        <span className="tag">MD</span>
                        <span className="tag">Facial Surgery</span>
                        <span className="tag">TMJ Disorders</span>
                    </div>
                </div>
                
                <div className="about">
                    <h4>About</h4>
                    <p>Dr. Johnson combines dental and medical expertise to treat complex facial and jaw conditions. She specializes in reconstructive surgery, TMJ disorders, and advanced dental implant procedures.</p>
                </div>
                
                <div className="experience">
                    <div className="experience-item">
                        <div className="experience-number">14+</div>
                        <div className="experience-label">Years Experience</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">1200+</div>
                        <div className="experience-label">Surgeries</div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-number">97%</div>
                        <div className="experience-label">Success Rate</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="booking-card">
            <h3>Book an Appointment</h3>
            <form id="bookingForm">
                <div className="form-group">
                    <label for="patientName">Full Name *</label>
                    <input type="text" id="patientName" name="patientName" required></input>
                </div>
                
                <div className="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                
                <div className="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required></input>
                </div>
                
                <div className="form-group doctor-select">
                    <label for="doctor">Select Doctor *</label>
                    <select id="doctor" name="doctor" required>
                        <option value="">Choose a doctor...</option>
                        <option value="dr-chen">Dr. Michael Chen - Dental Specialist</option>
                        <option value="dr-rodriguez">Dr. Sarah Rodriguez - Orthopedic Surgeon</option>
                        <option value="dr-wilson">Dr. James Wilson - Diagnostic Radiologist</option>
                        <option value="dr-johnson">Dr. Emily Johnson - Oral & Maxillofacial Surgeon</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label for="appointmentDate">Preferred Date *</label>
                    <input type="date" id="appointmentDate" name="appointmentDate" required></input>
                </div>
                
                <div className="form-group">
                    <label for="appointmentTime">Preferred Time *</label>
                    <select id="appointmentTime" name="appointmentTime" required>
                        <option value="">Select time...</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label for="reason">Reason for Visit</label>
                    <textarea id="reason" name="reason" placeholder="Please describe your symptoms or reason for the appointment..."></textarea>
                </div>
                
                <div className="form-group">
                    <label for="insurance">Insurance Provider</label>
                    <input type="text" id="insurance" name="insurance" placeholder="Enter your insurance provider"></input>
                </div>
                
                <button type="submit" className="book-btn">Book Appointment</button>
                
                <div id="successMessage" className="success-message">
                    Thank you! Your appointment request has been submitted. We'll contact you within 24 hours to confirm.
                </div>
            </form>
        </div>
    </div>
</div>

)
export default Dental;