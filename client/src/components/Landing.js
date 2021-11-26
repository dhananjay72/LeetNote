import React, { useState } from "react";
import { Link } from "react-router-dom";
import tt from "../reducers/authReducer";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);

  const g1 = () => {
    window.location.href = "/auth/google/";
  };

  const g2 = () => {
    window.location.href = "/problemset";
  };

  if (!isLogin) {
    console.log("fsdfsdfsd");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Sign in and store your own solutions.</h4>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();

          g1();
        }}
      >
        <Link to="/problemset">Click here</Link>
      </button>
    </div>
  );
};

export default Landing;
