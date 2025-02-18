import React from "react";
import "./Home.css";
import { useMediaContext } from "../../context/MediaContext";

const Home: React.FC = () => {
  const { images, backgroundGif } = useMediaContext();

  return (
    <div className="home-body">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
      >
        <source src={backgroundGif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="home-page-content">
          <img className="home-page-logo" src={images.newLogo} />
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
