import React, { useState } from 'react';
import './CSS/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header-navbar">
        <nav className="nav-main">
          <button className="hamburger" onClick={handleToggleMenu}>
            &#9776;
          </button>
          <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#band">BAND</a></li>
            <li><a href="#tour">TOUR</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li className="more">
              MORE <span className="arrow">&#9660;</span>
              <ul className="dropdown">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#merch">MERCH</a></li>
                <li><a href="#gallery">GALLERY</a></li>
              </ul>
            </li>
            <li className="search-icon">
              <span role="img" aria-label="search">&#128269;</span>
            </li>
          </ul>
          <div className="nav-auth">
            <button className="signin-btn">SIGNIN</button>
            <button className="signout-btn">SIGNOUT</button>
          </div>
        </nav>
      </header>
      <section id="home">
        {/* Nội dung trang chủ */}
      </section>
    </>
  );
}

export default Header;