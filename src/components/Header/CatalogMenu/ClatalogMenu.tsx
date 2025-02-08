import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./ClatalogMenu.css";
import { Link } from "react-router-dom";
import { data } from "../../../helpers/mockData";

const CatalogMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(true);
  }, []);

  return (
    <div className={`catalog-menu ${showMenu ? 'show' : ''}`}>
      <div className="catalog-menu-content">
        {data.map((menu) => (
          <div key={menu.categoryName} className="catalog-menu-item">
            <Link to={menu.link} className="catalog-menu-category">
              <Typography
                component="div"
                fontWeight="bold"
                color="textPrimary"
                sx={{ "&:hover": { color: "rgb(102, 107, 113)", cursor: "pointer" } }}
              >
                {menu.categoryName}
              </Typography>
            </Link>
            <div className="catalog-menu-products">
              {menu.products.map((product) => (
                <Link key={product.name} to={product.link} className="catalog-menu-product">
                  <Typography variant="body2" component="div" color="textSecondary"
                    sx={{ "&:hover": { color: "rgb(89, 89, 89)", cursor: "pointer" } }}
                  >
                    {product.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogMenu;