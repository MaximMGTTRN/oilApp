import React, { useState, useEffect } from "react";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import Header from "../../components/Header/Header";
import PageBody from "../../components/PageBody/PageBody";
import Footer from "../../components/Footer/Footer";

const MainLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000); // Match the duration of the fade-out animation
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className={fadeOut ? "fade-out" : ""}>
      <SplashScreen />
    </div>
  ) : (
    <>
      <div className="main-layout">
        <Header />
        <PageBody />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
