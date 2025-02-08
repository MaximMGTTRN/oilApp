import React from "react";
import "./PageBody.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../../router/router";

const PageBody: React.FC = () => {
  return (
    <div className="page-body">
      <RouterProvider router={router} />;
    </div>
  );
};

export default PageBody;
