import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./ClatalogMenu.css";
import { Link } from "react-router-dom"; // Используем Link из react-router-dom

const menuData = [
  {
    categoryName: "Масла для холодильников",
    link: "/catalog/oils",
    products: [
      { name: "Масло 1", link: "/catalog/oils/1" },
      { name: "Масло 2", link: "/catalog/oils/2" },
      { name: "Масло 3", link: "/catalog/oils/3" },
      { name: "Масло 4", link: "/catalog/oils/4" },
    ]
  },
  {
    categoryName: "Масла для гидравлики",
    link: "/catalog/hydraulics",
    products: [
      { name: "Масло 1", link: "/catalog/hydraulics/1" },
      { name: "Масло 2", link: "/catalog/hydraulics/2" },
      { name: "Масло 3", link: "/catalog/hydraulics/3" },
      { name: "Масло 4", link: "/catalog/hydraulics/4" },
    ]
  },
  {
    categoryName: "Масла для трансмиссии",
    link: "/catalog/transmissions",
    products: [
      { name: "Масло 1", link: "/catalog/transmissions/1" },
      { name: "Масло 2", link: "/catalog/transmissions/2" },
      { name: "Масло 3", link: "/catalog/transmissions/3" },
      { name: "Масло 4", link: "/catalog/transmissions/4" },
    ]
  }
];

const CatalogMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(true);
  }, []);

  return (
    <div className={`catalog-menu ${showMenu ? 'show' : ''}`}>
      <div className="catalog-menu-content">
        {menuData.map((menu) => (
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