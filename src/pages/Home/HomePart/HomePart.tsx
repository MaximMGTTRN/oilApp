import { ReactNode } from "react";
import "./HomePart.css";

interface IHomePartProps {
  children: ReactNode;
  backgroundColor?: string;
  maxWidth?: string;
}

export const HomePart: React.FC<IHomePartProps> = ({
  children,
  backgroundColor,
  maxWidth,
}) => {
  return (
    <div
      className="home-part"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#FFFFFF",
      }}
    >
      <div
        className="home-part-content"
        style={{
          maxWidth: maxWidth ? maxWidth : "1200px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
