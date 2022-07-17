import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        il libero
      </h1>
    </div>
  );
};

export default Header;
