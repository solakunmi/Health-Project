import React, { useState } from "react";
import "../Styles/HomePage.css";
import profileImg from "../assets/profile.png";
import reminderImg from "../assets/reminder.png";
import filterImg from "../assets/filter.png";
import heartImg from "../assets/heart.png";
import earImg from "../assets/ear.png";
import toothImg from "../assets/tooth.png";
import eyeImg from "../assets/eye.png";
import faceImg from "../assets/face.png";
import mikeImg from "../assets/mike.png";
import felixImg from "../assets/felix.png";
import evaImg from "../assets/eva.png";
import locationIcon from "../assets/location.png";
import starIcon from "../assets/star.png";
import searchIcon from "../assets/search.png";
import homeIcon from "../assets/home.png";
import appointmentIcon from "../assets/appointment.png";
import userIcon from "../assets/user.png";
import settingsIcon from "../assets/settings.png";

function HomePage({ setScreen }) {
  const [activeTab, setActiveTab] = useState("home"); // keep track of selected tab

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setScreen(tab); // switch screen
  };

  return (
    <div className="homepage-container">
      {/* Header */}
      <div className="header">
        <div className="profile-section">
          <img src={profileImg} alt="Profile" className="profile-pic" />
          <div className="profile-text">
            <h2>Hello, Angel</h2>
            <p>Welcome Back!</p>
          </div>
        </div>
        <img src={reminderImg} alt="Reminder" className="reminder-icon" />
      </div>

      {/* Search & Filter */}
      <div className="search-filter">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <img src={filterImg} alt="Filter" className="filter-icon" />
      </div>

      {/* Services */}
      <h5>SERVICES</h5>
      <div className="services-scroll">
        <div className="service-card">
          <img src={heartImg} alt="Heart" />
          <p>Cardiologist Specialist</p>
        </div>
        <div className="service-card">
          <img src={earImg} alt="Ear" />
          <p>Otologist Specialist</p>
        </div>
        <div className="service-card">
          <img src={toothImg} alt="Tooth" />
          <p>Dental Specialist</p>
        </div>
        <div className="service-card">
          <img src={eyeImg} alt="Eye" />
          <p>Eye Specialist</p>
        </div>
        <div className="service-card">
          <img src={faceImg} alt="Face" />
          <p>Plastic Specialist</p>
        </div>
      </div>

      {/* Top Doctors */}
      <h5>Top Doctors</h5>
      <div className="doctor-card" onClick={() => setScreen("profile")}>
        <img src={mikeImg} alt="Dr Mike" className="doctor-pic" />
        <div className="doctor-info">
          <p className="doctor-name">Dr Mike Peterson</p>
          <p className="doctor-specialty">Heart Surgeon</p>
          <div className="location-rating">
            <img src={locationIcon} alt="Location" className="location-icon" />
            <span>Los Angeles</span>
          </div>
        </div>
        <div className="doctor-rating">
          <img src={starIcon} alt="Star" />
          <span>4.9</span>
        </div>
      </div>

      <div className="doctor-card">
        <img src={felixImg} alt="Dr Felix" className="doctor-pic" />
        <div className="doctor-info">
          <p className="doctor-name">Dr Felix Right</p>
          <p className="doctor-specialty">Ophthalmologist</p>
          <div className="location-rating">
            <img src={locationIcon} alt="Location" className="location-icon" />
            <span>London</span>
          </div>
        </div>
        <div className="doctor-rating">
          <img src={starIcon} alt="Star" />
          <span>4.9</span>
        </div>
      </div>

      <div className="doctor-card">
        <img src={evaImg} alt="Dr Evans" className="doctor-pic" />
        <div className="doctor-info">
          <p className="doctor-name">Dr Evans Jessica</p>
          <p className="doctor-specialty">Obstetrician</p>
          <div className="location-rating">
            <img src={locationIcon} alt="Location" className="location-icon" />
            <span>Nigeria</span>
          </div>
        </div>
        <div className="doctor-rating">
          <img src={starIcon} alt="Star" />
          <span>4.9</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <img
          src={homeIcon}
          alt="Home"
          onClick={() => handleNavClick("home")}
          className={activeTab === "home" ? "active-icon" : ""}
        />
        <img
          src={appointmentIcon}
          alt="Appointment"
          onClick={() => handleNavClick("appointment")}
          className={activeTab === "appointment" ? "active-icon" : ""}
        />
        <img
          src={userIcon}
          alt="Profile"
          onClick={() => handleNavClick("profile")}
          className={activeTab === "profile" ? "active-icon" : ""}
        />
        <img
          src={settingsIcon}
          alt="Settings"
          onClick={() => handleNavClick("settings")}
          className={activeTab === "settings" ? "active-icon" : ""}
        />
      </div>
    </div>
  );
}

export default HomePage;
