import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSignupSuccess = () => {
    setIsLogin(true);
  };

  return (
    <>
      {isLogin ? (
        <Login toggleAuthMode={toggleAuthMode} />
      ) : (
        <Signup
          onSignupSuccess={handleSignupSuccess}
          toggleAuthMode={toggleAuthMode}
        />
      )}
    </>
  );
};

export default Auth;
