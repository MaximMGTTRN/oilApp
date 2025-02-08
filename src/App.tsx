import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { router } from "./router/router";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
};

export default App;
