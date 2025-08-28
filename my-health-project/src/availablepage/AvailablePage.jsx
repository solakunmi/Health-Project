"use client"
import "../styles/AvailablePage.css"
import proflea from "../assets/profilea.png"

export default function AvailablePage({ setScreen }) {
  return (
    <div className="available-container">
      {/* Header */}
      <div className="header">
        <div className="back" onClick={() => setScreen("profile")}>
          &lt;
        </div>
      </div>

      {/* Profile section */}
      <div className="profile-card">
        <img src={proflea} alt="doctor" className="profile-img" />
        <h2 className="doctor-name">Dr. Mike Peterson</h2>

        {/* Available Days */}
        <h4 className="available-days-title">Available Days</h4>
        <div className="available-days">
          <div className="day-box">
            <p className="day-name">Mon</p>
            <p className="day-time">8:00am - 3:00pm</p>
          </div>
          <div className="day-box">
            <p className="day-name">Tue</p>
            <p className="day-time">8:00am - 4:00pm</p>
          </div>
          <div className="day-box">
            <p className="day-name">Wed</p>
            <p className="day-time">8:00am - 3:00pm</p>
          </div>
          <div className="day-box">
            <p className="day-name">Thu</p>
            <p className="day-time">8:00am - 3:00pm</p>
          </div>
          <div className="day-box">
            <p className="day-name">Fri</p>
            <p className="day-time">8:00am - 3:00pm</p>
          </div>
        </div>

        {/* Available Times */}
        <h4 className="available-times-title">Available Time</h4>
        <div className="available-times">
          <div className="time-box">8:30am</div>
          <div className="time-box">9:30am</div>
          <div className="time-box">10:30am</div>
          <div className="time-box">11:30am</div>
        </div>

        {/* Consultation Type */}
        <h4 className="consultation-title">Consultation Type</h4>
        <div className="consultation-buttons">
          <button className="consult-btn">
            <span>In-person</span>
            <span>👨</span>
          </button>
          <button className="consult-btn">
            <span>Video Call</span>
            <span>🎥</span>
          </button>
          <button className="consult-btn">
            <span>Message</span>
            <span>💬</span>
          </button>
        </div>

        {/* CTA button */}
        <button className="book-btn" onClick={() => setScreen("confirma")}>
          Book an Appointment
        </button>
      </div>
    </div>
  )
}
