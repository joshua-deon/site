import React from "react";
import "./styles.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About Me
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            My Work
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
