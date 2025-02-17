import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CatalogMenu from "./CatalogMenu/ClatalogMenu";
import { useLocationContext } from "../../context/LocationContext";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [catalogOpened, setCatalogOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 915);
  const { currentUrl } = useLocationContext();
  const location = useLocation();

  useEffect(() => {
    setCatalogOpened(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 915);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > Number(window.innerHeight.toString())) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNeedBackground = currentUrl !== "/" || scrolled || catalogOpened;

  if (!isMobile) {
    return (
      <header
        className={`header ${isNeedBackground ? "scrolled" : ""}`}
        style={{ zIndex: 1000 }}
      >
        <div className="header-content">
          <div className="nav-logo">
            <Link to="/">
              <img
                className="nav-logo-img"
                src={"/newLogoNoText.png"}
                alt="Logo"
              />
            </Link>
          </div>
          <nav>
            <div className="nav-list">
              <div className="nav-part">
                <Link to="/">О Компании</Link>
              </div>
              <div
                className="nav-part"
                onClick={() => {
                  setCatalogOpened(!catalogOpened);
                }}
              >
                <Typography
                  component="div"
                  fontWeight="bold"
                  color="textPrimary"
                  sx={{
                    "&:hover": {
                      color: "rgb(102, 107, 113)",
                      cursor: "pointer",
                    },
                  }}
                >
                  Каталог
                </Typography>
              </div>
              <div className="nav-part">
                <Link to="/cooperation">Сотрудничество</Link>
              </div>
              <div className="nav-part">
                <Link to="/contacts">Контакты</Link>
              </div>
            </div>
          </nav>
          <div className="nav-callback-button-block">
            <Tooltip
              title={
                "Напишите нам и мы поможем подобрать вам аналог к вашему маслу"
              }
            >
              <div
                className="nav-callback-button"
                onClick={() => {
                  console.log(123123);
                }}
              >
                Связаться с нами
              </div>
            </Tooltip>
          </div>
        </div>
        {catalogOpened && (
          <CatalogMenu onClose={() => setCatalogOpened(false)} />
        )}
      </header>
    );
  } else {
    return (
      <header
        className={`header ${isNeedBackground ? "scrolled" : ""}`}
        style={{ zIndex: 1000 }}
      >
        <div className="header-content">
          <div className="nav-logo">
            <Link to="/">
              <img
                className="nav-logo-img"
                src={"/newLogoNoText.png"}
                alt="Logo"
              />
            </Link>
          </div>
          <div>
            <MenuIcon />
          </div>
        </div>
        {catalogOpened && (
          <CatalogMenu onClose={() => setCatalogOpened(false)} />
        )}
      </header>
    );
  }
};

export default Header;
