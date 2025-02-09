import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-body">
      <video className="background-video"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
      >
        <source src="backgroundGif.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="fffff">
          <h1 className="title">
            <img className="title-logo" src='public/newLogo.png' />
          </h1>
          <div className="title-dop">Производство синтетических смазочных материалов специального назначения</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
