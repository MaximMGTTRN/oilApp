import './Home.css';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-body">
      <video className="background-video" autoPlay loop muted>
        <source src="backgroundGif.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1 className="title">LUBRICORE</h1>
      </div>
    </div>
  );
};

export default Home;
