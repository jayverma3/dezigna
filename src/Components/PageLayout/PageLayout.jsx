import React from "react";
import "./PageLayout.css";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <main className="page-layout-content">{children}</main>
    </div>
  );
};

export default PageLayout;
