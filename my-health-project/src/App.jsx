"use client";

import { useState, useEffect } from "react";

// Authentication & Onboarding Pages
import Onboarding from "./onboardingpage/Onboarding";
import Registration from "./registrationpage/Registration";
import SignUp from "./signuppage/SignUp";
import LogIn from "./loginpage/LogIn";
import PasswordPage from "./passwordpage/PasswordPage";
import OTPPage from "./otppage/OTPPage";
import ResetPage from "./resetpage/ResetPage";
import ConfirmPage from "./confirmpage/ConfirmPage";

// Main App Pages
import HomePage from "./homepage/HomePage";
import ProfilePage from "./profilepage/ProfilePage";
import AvailablePage from "./availablepage/AvailablePage";
import ConfirmaPage from "./confirmapage/ConfirmaPage";
import UserPage from "./userpage/UserPage";
import SettingPage from "./settingpage/SettingPage"; 
import NotificationPage from "./notificationpage/NotificationPage"; // <-- new import

// Appointment Flow Pages
import AppointmentPage from "./appointmentpage/AppointmentPage";
import CancelPage from "./cancelpage/CancelPage";
import AppointCancel from "./appointcancel/AppointCancel";

function App() {
  const [currentScreen, setCurrentScreen] = useState("onboarding");

  // Automatically move from onboarding to registration after 3 seconds
  useEffect(() => {
    if (currentScreen === "onboarding") {
      const timer = setTimeout(() => {
        setCurrentScreen("registration");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <>
      {/* Onboarding & Authentication Flow */}
      {currentScreen === "onboarding" && <Onboarding />}
      {currentScreen === "registration" && (
        <Registration setScreen={setCurrentScreen} />
      )}
      {currentScreen === "signup" && (
        <SignUp setScreen={setCurrentScreen} successRedirect="home" />
      )}
      {currentScreen === "login" && (
        <LogIn setScreen={setCurrentScreen} successRedirect="home" />
      )}
      {currentScreen === "forgotPassword" && (
        <PasswordPage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "otp" && <OTPPage setScreen={setCurrentScreen} />}
      {currentScreen === "resetPassword" && (
        <ResetPage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "confirm" && (
        <ConfirmPage setScreen={setCurrentScreen} />
      )}

      {/* Main App Pages */}
      {currentScreen === "home" && <HomePage setScreen={setCurrentScreen} />}
      {currentScreen === "profile" && (
        <ProfilePage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "available" && (
        <AvailablePage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "confirma" && (
        <ConfirmaPage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "userpage" && (
        <UserPage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "settingpage" && (
        <SettingPage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "notificationpage" && (   // <-- new condition
        <NotificationPage setScreen={setCurrentScreen} />
      )}

      {/* Appointment Management Flow */}
      {currentScreen === "appointment" && (
        <AppointmentPage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "cancel" && (
        <CancelPage setScreen={setCurrentScreen} />
      )}
      {currentScreen === "appointcancel" && (
        <AppointCancel setScreen={setCurrentScreen} />
      )}
    </>
  );
}

export default App;
