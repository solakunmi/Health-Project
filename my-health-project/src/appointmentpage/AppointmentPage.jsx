"use client"

import { useState } from "react"
import mikeImg from "../assets/drmike.png"
import felixImg from "../assets/drfelix.png"
import homeIcon from "../assets/home.png"
import appointmentIcon from "../assets/appointment.png"
import userIcon from "../assets/user.png"
import settingsIcon from "../assets/settings.png"
import "../Styles/AppointmentPage.css"

const AppointmentPage = ({ setScreen }) => {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [reminders, setReminders] = useState({
    mike: true,
    felix: true,
    third: true,
  })

  const toggleReminder = (doctor) => {
    setReminders((prev) => ({
      ...prev,
      [doctor]: !prev[doctor],
    }))
  }

  const appointments = [
    {
      id: "mike",
      doctor: "Dr Mike Peterson",
      specialty: "Heart Surgeon",
      date: "Mar 19th (Wed)",
      time: "10am",
      type: "Online video appointment",
      image: mikeImg,
    },
    {
      id: "felix",
      doctor: "Dr Felix Right",
      specialty: "Heart Surgeon",
      date: "May 19th (Fri)",
      time: "11am",
      type: "In-person appointment",
      image: felixImg,
    },
    {
      id: "third",
      doctor: null,
      specialty: null,
      date: "Aug 10th (Mon)",
      time: "10am",
      type: null,
      image: null,
    },
  ]

  return (
    <div className="appointment-page">
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={() => setScreen("home")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="title">My Appointments</h1>
        <button className="search-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path
              d="M21 21L16.65 16.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={`tab ${activeTab === "upcoming" ? "active" : ""}`} onClick={() => setActiveTab("upcoming")}>
          Upcoming
        </button>
        <button
          className={`tab ${activeTab === "cancelled" ? "active" : ""}`}
          onClick={() => setActiveTab("cancelled")}
        >
          Cancelled
        </button>
      </div>

      {/* Appointments List */}
      <div className="appointments-list">
        {appointments.map((appointment, index) => (
          <div key={appointment.id} className="appointment-item">
            {/* Date and Reminder outside the card */}
            <div className="appointment-header">
              <span className="appointment-date">
                {appointment.date} - {appointment.time}
              </span>
              <div className="reminder-toggle">
                <span className="remind-text">Remind me</span>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={reminders[appointment.id]}
                    onChange={() => toggleReminder(appointment.id)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            {/* Appointment Card */}
            {appointment.doctor && (
              <>
                <div className="appointment-card">
                  <div className="doctor-info">
                    <img
                      src={appointment.image || "/placeholder.svg"}
                      alt={appointment.doctor}
                      className="doctor-image"
                    />
                    <div className="doctor-details">
                      <h3 className="doctor-name">{appointment.doctor}</h3>
                      <p className="doctor-specialty">{appointment.specialty}</p>
                      <p className="appointment-type">{appointment.type}</p>
                    </div>
                  </div>
                </div>

                <div className="appointment-actions">
                  <button className="view-btn">View</button>
                  <button className="cancel-btn" onClick={() => setScreen("cancel")}>
                    Cancel
                  </button>
                </div>
              </>
            )}

            {index < appointments.length - 1 && <div className="appointment-divider"></div>}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-item" onClick={() => setScreen("home")}>
          <img src={homeIcon || "/placeholder.svg"} alt="Home" className="nav-icon" />
        </button>
        <button className="nav-item active">
          <img src={appointmentIcon || "/placeholder.svg"} alt="Appointments" className="nav-icon" />
        </button>
        <button className="nav-item" onClick={() => setScreen("profile")}>
          <img src={userIcon || "/placeholder.svg"} alt="Profile" className="nav-icon" />
        </button>
        <button className="nav-item">
          <img src={settingsIcon || "/placeholder.svg"} alt="Settings" className="nav-icon" />
        </button>
      </div>
    </div>
  )
}

export default AppointmentPage
