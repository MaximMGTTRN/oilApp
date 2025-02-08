import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CatalogMenu from "./CatalogMenu/ClatalogMenu";
import "./Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [catalogOpened, setCatalogOpened] = useState(false);
  const [url, setUrl] = useState("");

  const location = useLocation();
  console.log(url, 123132131);

  useEffect(() => {
    setUrl(location.pathname);
    setCatalogOpened(false);
  }, [location]);

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

  const isNeedBackground = url !== "/" || scrolled || catalogOpened

  return (
    <header className={`header ${isNeedBackground ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="nav-logo">
          <Link to="/">
            <img className="nav-logo-img" src={"/newLogoNoText.png"} alt="Logo" />
          </Link>
        </div>
        <nav>
          <div className="nav-list">
            <div className="nav-part">
              <Link to="/">О нас</Link>
            </div>
            <div className="nav-part" onClick={() => { setCatalogOpened(!catalogOpened) }}>
              <Typography
                component="div"
                fontWeight="bold"
                color="textPrimary"
                sx={{ "&:hover": { color: "rgb(102, 107, 113)", cursor: "pointer" } }}
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
      </div>
      {catalogOpened ? <CatalogMenu /> : null}
    </header>
  );
};

export default Header;
