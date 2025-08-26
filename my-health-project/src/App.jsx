import { useState, useEffect } from "react";
import Onboarding from "./onboardingpage/Onboarding";
import Registration from "./registrationpage/Registration";
import SignUp from "./signuppage/SignUp";
import LogIn from "./loginpage/LogIn";
import PasswordPage from "./passwordpage/PasswordPage";
import OTPPage from "./otppage/OTPPage";
import ResetPage from "./resetpage/ResetPage";
import ConfirmPage from "./confirmpage/ConfirmPage"; // 👈 newly added

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
      {currentScreen === "onboarding" && <Onboarding />}
      {currentScreen === "registration" && (
        <Registration setScreen={setCurrentScreen} />
      )}
      {currentScreen === "signup" && <SignUp setScreen={setCurrentScreen} />}
      {currentScreen === "login" && <LogIn setScreen={setCurrentScreen} />}
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
    </>
  );
}

export default App;
