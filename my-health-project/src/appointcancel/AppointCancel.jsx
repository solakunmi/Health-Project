"use client"
import "../styles/AppointCancel.css"
import completedImg from "../assets/completed.png"

function AppointCancel({ setScreen }) {
  return (
    <div className="confirm-container">
      {/* Image */}
      <div className="image-wrapper">
        <img src={completedImg || "/placeholder.svg"} alt="Completed" />
      </div>

      {/* Heading */}
      <h5>
        Your appointment cancellation has been succefully received. Please note that after three cancellation, you will not be allowed to use the Cura app for a period of three month.
      </h5>

      {/* Spacer */}
      <div style={{ height: "60px" }}></div>

      {/* Continue Button */}
      <button
        className="backtohome-btn"
        onClick={() => setScreen("appointment")} // back to HomePage
      >
        Back to appointment
      </button>
    </div>
  )
}

export default AppointCancel
