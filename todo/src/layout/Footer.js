import React from "react";
import "../style/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <p>© 2024 | To Do List App </p>
        <div className="socialMedia">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </div>
      </div>
    </div>
  );
};
