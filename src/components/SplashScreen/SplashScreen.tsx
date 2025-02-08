import React from "react";
import "./SplashScreen.css";

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <img src={"/newLogo.png"} alt="Logo" />
    </div>
  );
};

export default SplashScreen;
