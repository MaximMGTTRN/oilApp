import React, { ReactNode } from "react";
import "./PageBody.css";

interface IPageBodyProps {
  children: ReactNode;
  title?: string;
  backgroundColorProps?: string
}
const PageBody: React.FC<IPageBodyProps> = ({ children, title, backgroundColorProps }) => {
  const backgroundColor = backgroundColorProps ? backgroundColorProps : '#f6f6fd'
  return (
    <div className="page-body" style={{ backgroundColor: backgroundColor }}>
      <div className="page-body-content">
        {title &&
          <div className="page-body-header">
            {title}
          </div>}
        <div className="page-body-children">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageBody;
