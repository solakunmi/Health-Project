import React from "react";
import homeIcon from "../assets/home.png";
import profileIcon from "../assets/user.png";
import appointmentIcon from "../assets/appointment.png";
import settingsIcon from "../assets/settings.png";
import "../styles/SettingPage.css";

const SettingPage = ({ setScreen }) => {
  const menuItems = [
    {
      id: "notifications",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V10c0-3.07-1.63-5.64-4.5-6.32V3a1.5 1.5 0 0 0-3 0v.68C7.63 4.36 6 6.92 6 10v6l-2 2v1h16v-1l-2-2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Notifications",
      onClick: () => setScreen("notificationpage"),  // 🔥 updated
    },
    {
      id: "password",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-7V7a6 6 0 0 0-12 0v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="6" y="10" width="12" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Password Settings",
      onClick: () => console.log("Password Settings clicked"),
    },
  ];

  return (
    <div className="setting-page">
      {/* Header */}
      <div className="Header">
        <button className="Bback-btn" onClick={() => setScreen("home")}>
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
        <h4 className="page-title">Settings</h4>
      </div>

      {/* Menu Section */}
      <div className="menu-section">
        {menuItems.map((item) => (
          <button key={item.id} className="menu-item" onClick={item.onClick}>
            <div className="menu-item-content">
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-title">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-item" onClick={() => setScreen("home")}>
          <img src={homeIcon} alt="Home" className="nav-icon" />
        </button>
        <button className="nav-item" onClick={() => setScreen("appointment")}>
          <img src={appointmentIcon} alt="Appointments" className="nav-icon" />
        </button>
        <button className="nav-item" onClick={() => setScreen("userpage")}>
          <img src={profileIcon} alt="Profile" className="nav-icon" />
        </button>
        <button className="nav-item active" onClick={() => setScreen("settingpage")}>
          <img src={settingsIcon} alt="Settings" className="nav-icon" />
        </button>
      </div>
    </div>
  );
};

export default SettingPage;
