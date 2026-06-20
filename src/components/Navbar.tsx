import React, { useState } from 'react';
import assets from '../figmaAssets';

import {
  FaHome,
  FaInfoCircle,
  FaHandsHelping,
  FaTag,
  FaQuestionCircle,
  FaAddressBook
} from "react-icons/fa";

const menuItems = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaInfoCircle />, label: "About Us" },
  { icon: <FaHandsHelping />, label: "Our Services" },
  { icon: <FaTag />, label: "Pricing" },
  { icon: <FaQuestionCircle />, label: "FAQ" },
  { icon: <FaAddressBook />, label: "Contact" },
];


export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">

        <div className="logo">
          <img src={assets.logo} alt="logo_img" />
          Logo
        </div>

        <nav className="links">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Our Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>

        <button className="cta">
          <img src={assets.solar_phone} alt="" />
          Contact us
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

      </div>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-header">
          <div className="logo">
            <img src={assets.logo} alt="logo_img" />
            Logo
          </div>

          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="mobile-body">
        <nav className="mobile-links">
            {menuItems.map((item) => (
            <a href="#" key={item.label}>
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <button className="mobile-cta">
          <img src={assets.solar_phone} alt="" />
          Contact us
        </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;