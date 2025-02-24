import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { router } from "./router/router";
import { useAppContext } from "./context/AppContext";
const App: React.FC = () => {
  const { isLoading, setIsLoading } = useAppContext();
  const [fadeOut, setFadeOut] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    let timer = 0
    let removeSplash = 0
    const video = document.createElement("video");
    video.src = "/backgroundVideo.mp4"; // Файл в public
    video.preload = "auto";
    video.oncanplaythrough = () => {
      setVideoLoaded(true);
    }

    timer = setTimeout(() => setFadeOut(true), 2500); // Начинаем скрытие через 2.5 сек
    removeSplash = setTimeout(() => setIsLoading(false), 3000); // Полностью скрываем через 3 сек

    video.load();
    return () => {
      clearTimeout(timer);
      clearTimeout(removeSplash);
    };
  }, []);

  if (isLoading || !videoLoaded) {
    return <SplashScreen fadeOut={fadeOut} />;
  }

  return <RouterProvider router={router} />;
};

export default App;