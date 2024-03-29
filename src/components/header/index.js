import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/index";
import Web from "./web/index";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };
  window.onscroll = function () {
    setIsOpen(false);
  };
  return (
    <div className="header">
      {/* <div onClick={handleLogoClick} className="logo">
        <a href="https://docs.google.com/document/d/1j5TCl8QMSmEnc2XjkQqJhqs_EKSJYGCHyM8E9DQvL2g/edit?usp=sharing">
          Digital Nomad
        </a>
      </div>  */}
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
