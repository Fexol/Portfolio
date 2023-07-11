import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="scroll-container">
        <button
          className="btn-scroll"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
          {" "}
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
      <img
        className="footer-img"
        src={require("../../assets/Home/shape-bg2.png")}
        alt="you have problem with the img"
      />
    </div>
  );
}
