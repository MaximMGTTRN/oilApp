import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface LocationContextType {
  currentPath: string;
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
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  // checkCurrentPage({ currentPath })

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <LocationContext.Provider value={{ currentPath }}>
      {children}
    </LocationContext.Provider>
  );
};

// const checkCurrentPage = ({ currentPath }: { currentPath: string }) => {
  
// }
