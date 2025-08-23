import { useState, useEffect } from "react";
import Onboarding from "./onboardingpage/Onboarding";
import Registration from "./registrationpage/Registration";
import SignUp from "./signuppage/SignUp";

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
    </>
  );
}

export default App;
