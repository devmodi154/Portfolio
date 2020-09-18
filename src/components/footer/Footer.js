import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <p className="footer-text">Template by <a href="https://github.com/saadpasta/developerFolio">Saad Pasta</a></p>
    </div>
    </Fade>
  );
}
