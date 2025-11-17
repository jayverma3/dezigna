import React from "react";
import Auth from "../../Components/Auth/Auth";
import "./AuthPage.css";
import Header from "../../Components/Header/Header";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-container">
        <Header />
        <Auth />
      </div>
    </div>
  );
};

export default AuthPage;
