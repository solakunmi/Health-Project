import { useState, useEffect } from "react";
import Onboarding from "./onboardingpage/Onboarding";
import Registration from "./registrationpage/Registration";
import SignUp from "./signuppage/SignUp";
import LogIn from "./loginpage/LogIn";  // 👈 when you create the login page

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
    </>
  );
}

export default App;
