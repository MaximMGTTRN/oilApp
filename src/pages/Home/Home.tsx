import React, { useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-body">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
      >
        <source src={'/backgroundVideo.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="home-page-content">
          <img className="home-page-logo" src={'/newLogo.png'} />
          <div className="home-page-title">
            Производство синтетических смазочных материалов специального
            назначения
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
