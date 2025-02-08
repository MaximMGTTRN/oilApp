import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './MainLayout.css'
import { LocationContextProvider } from "../../context/LocationContext";

const MainLayout: React.FC = () => {
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
