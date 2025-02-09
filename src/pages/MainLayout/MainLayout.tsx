import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './MainLayout.css'
import { LocationContextProvider } from "../../context/LocationContext";
import { useEffect } from "react";

const MainLayout: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // При изменении пути скроллим страницу вверх

  return (
    <LocationContextProvider>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </LocationContextProvider>
  );
};

export default MainLayout;
