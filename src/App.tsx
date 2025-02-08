import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { router } from "./router/router";
import { useAppContext } from "./context/AppContext";
const App: React.FC = () => {
  const { isLoading, setIsLoading } = useAppContext();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500); // Начинаем скрытие через 2.5 сек
    const removeSplash = setTimeout(() => setIsLoading(false), 3000); // Полностью скрываем через 3 сек

    return () => {
      clearTimeout(timer);
      clearTimeout(removeSplash);
    };
  }, []);

  if (isLoading) {
    return <SplashScreen fadeOut={fadeOut} />;
  }

  return <RouterProvider router={router} />;
};

export default App;