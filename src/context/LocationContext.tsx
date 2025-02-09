import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "./AppContext";

interface LocationContextType {
  currentUrl: string;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocationContext must be used within a URLProvider");
  }
  return context;
};

export const LocationContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setCategoryTag, setProductTag } = useAppContext();
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname);
    checkCurrentPage(location.pathname, setCategoryTag, setProductTag);
  }, [location]);

  return (
    <LocationContext.Provider value={{ currentUrl }}>
      {children}
    </LocationContext.Provider>
  );
};

const checkCurrentPage = (
  path: string,
  setCategoryTag: (value: string) => void,
  setProductTag: (value: string) => void
) => {
  const parts = path.split("/").filter(Boolean); // Разбиваем URL на части и убираем пустые элементы

  if (parts[0] === "catalog") {
    if (parts.length > 1) {
      setCategoryTag(parts[1]);
    }
    if (parts.length > 2) {
      setProductTag(parts[2]);
    } else {
      setProductTag("");
    }
  } else {
    setCategoryTag("");
    setProductTag("");
  }
};