import { ReactNode } from "react";
import "./HomePart.css";

interface IHomePartProps {
  children: ReactNode;
  backgroundColor?: string
}

export const HomePart: React.FC<IHomePartProps> = ({ children, backgroundColor }) => {
  return (
    <div className="home-part" style={{ backgroundColor: backgroundColor ? backgroundColor : '#f6f6fd' }}>
      <div className="home-part-content">
        {children}
      </div>
    </div>
  )
}