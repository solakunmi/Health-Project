import React from "react";
import "../styles/ProfilePage.css";
import proflea from "../assets/profilea.png";
import user from "../assets/user.png";
import check from "../assets/check.png";
import star from "../assets/star.png";
import locationIcon from "../assets/location.png"; // added for location

export default function ProfilePage({ setScreen }) {
  return (
    <div className="profile-container">
      {/* Header */}
      <div className="header">
        <div className="back" onClick={() => setScreen("home")}>
          &lt;
        </div>
      </div>

      {/* Profile card */}
      <div className="profile-card">
        <img src={proflea} alt="doctor" className="profile-img" />

        <h2 className="doctor-name">Dr. Mike Peterson</h2>
        <p className="doctor-specialty">Heart Surgeon</p>

        <div className="doctor-location">
          <img src={locationIcon} alt="location" className="location-icon" />
          <span>Los Angeles</span>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          <div className="stat-box">
            <img src={user} alt="patients" />
            <div>
              <p className="stat-value">PATIENTS</p>
              <p className="stat-label">2000+</p>
            </div>
          </div>

          <div className="stat-box">
            <div className="icon-bg"><img src={check} alt="experience" /></div>
            <div>
              <p className="stat-value">EXPERIENCE</p>
              <p className="stat-label">15 Yrs+</p>
            </div>
          </div>

          <div className="stat-box">
            <img src={star} alt="rating" />
            <div>
              <p className="stat-value">RATING</p>
              <p className="stat-label">4.9</p>
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Dr. Mike Peterson is a highly experienced Heart Surgeon with over 15
          years of expertise in advanced cardiac procedures. Passionate about
          patient care and innovation, he has successfully treated thousands of
          patients. Heart health Read more...
        </p>
      </div>

      {/* Fee / consultation */}
      <div className="fee-section">
        <h3>Consultation Fee:</h3>
        <p className="fee-text">$50 per hour</p>
      </div>

      {/* CTA button */}
      <button
        className="book-btn"
        onClick={() => setScreen("available")}
      >
        Book an Appointment
      </button>
    </div>
  );
}
