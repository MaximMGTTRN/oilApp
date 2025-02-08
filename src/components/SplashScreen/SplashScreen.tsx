import React from "react";
import "./SplashScreen.css";

const SplashScreen: React.FC<{ fadeOut: boolean }> = ({ fadeOut }) => {
  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <img src={"/newLogo.png"} alt="Logo" />
    </div>
  );
};

export default SplashScreen;
