import React from 'react';

import homeIcon from "../assets/home.png";
import profileImg from "../assets/profile.png";
import appointmentIcon from "../assets/appointment.png";
import userIcon from "../assets/user.png";
import settingsIcon from "../assets/settings.png";
import "../styles/UserPage.css";

const UserPage = ({ setScreen }) => {
  const menuItems = [
    {
      id: "personal",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon-svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Personal information",
      onClick: () => console.log("Personal information clicked"),
    },
    {
      id: "emergency",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon-svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Emergency Contact",
      onClick: () => console.log("Emergency Contact clicked"),
    },
    {
      id: "doctors",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon-svg">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Favourite Doctors",
      onClick: () => console.log("Favourite Doctors clicked"),
    },
    {
      id: "privacy",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon-svg">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Privacy Policy",
      onClick: () => console.log("Privacy Policy clicked"),
    },
    {
      id: "help",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon-svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Help",
      onClick: () => console.log("Help clicked"),
    },
    {
      id: "logout",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon-svg">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Log out",
      onClick: () => setScreen("login"),
    },
  ];

  return (
    <div className="user-page">
      {/* Header */}
      <div className="Hheader">
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
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image-container">
          <img
            src={profileImg} // updated to use imported image
            alt="Profile"
            className="profile-image"
          />
          <button className="edit-profile-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <h2 className="user-name">Zane Angel</h2>
      </div>

      {/* Menu Items */}
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
        <button className="nav-item active" onClick={() => setScreen("userpage")}>
          <img src={userIcon} alt="Profile" className="nav-icon" />
        </button>
        <button className="nav-item" onClick={() => setScreen("settingpage")}>
          <img src={settingsIcon} alt="Settings" className="nav-icon" />
        </button>
      </div>
    </div>
  );
};

export default UserPage;
