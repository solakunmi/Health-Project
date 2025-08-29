"use client"

import { useState } from "react"
import homeIcon from "../assets/home.png"
import appointmentIcon from "../assets/appointment.png"
import userIcon from "../assets/user.png"
import settingsIcon from "../assets/settings.png"
import "../styles/CancelPage.css"

const CancelPage = ({ setScreen }) => {
  const [selectedReason, setSelectedReason] = useState("personal")
  const [otherReason, setOtherReason] = useState("")

  const reasons = [
    { id: "feeling", label: "Feeling better" },
    { id: "personal", label: "Personal reasons" },
    { id: "financial", label: "Financial reasons" },
    { id: "scheduling", label: "Scheduling conflict" },
    { id: "earlier", label: "Found an earlier/later appointment" },
    { id: "others", label: "Others" },
  ]

  const handleCancel = () => {
    // Handle cancellation logic here
    console.log("Appointment cancelled:", selectedReason, otherReason)
    setScreen("appointcancel") // Navigate to confirmation page
  }

  return (
    <div className="cancel-page">
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={() => setScreen("appointment")}>
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
        <h1 className="title">Cancel Appointments</h1>
      </div>

      {/* Content */}
      <div className="cancel-content">
        <p className="cancel-subtitle">Let us know why you're cancelling:</p>

        {/* Reason Options */}
        <div className="reason-options">
          {reasons.map((reason) => (
            <label key={reason.id} className="reason-option">
              <input
                type="radio"
                name="cancelReason"
                value={reason.id}
                checked={selectedReason === reason.id}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="reason-radio"
              />
              <span className="reason-label">{reason.label}</span>
            </label>
          ))}
        </div>

        {/* Gray line demarcation before Others section */}
        <div className="others-divider"></div>

        {/* Others Section - Always show Others section with text area */}
        <div className="others-section">
          <label className="others-label">Others</label>
          <textarea
            className="others-textarea"
            placeholder="Write your reason"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            rows={4}
          />
        </div>

        {/* Cancel Button */}
        <button className="cancel-appointment-btn" onClick={handleCancel}>
          Cancel Appointment
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-item" onClick={() => setScreen("home")}>
          <img src={homeIcon || "/placeholder.svg"} alt="Home" className="nav-icon" />
        </button>
        <button className="nav-item" onClick={() => setScreen("appointment")}>
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

export default CancelPage
