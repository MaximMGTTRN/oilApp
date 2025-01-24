import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { SvgIcon } from "@mui/material";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-list">
          <div className="nav-part">
            <Link to="/">
              <SvgIcon component={OilBarrelIcon} />
            </Link>
          </div>
          <div className="nav-part">
            <Link to="/">О нас</Link>
          </div>
          <div className="nav-part">
            <Link to="/catalog">Каталог</Link>
          </div>
          <div className="nav-part">
            <Link to="/contacts">Контакты</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
