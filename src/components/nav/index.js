import { Link } from "gatsby";
import React from "react";
import "./styles.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            About Me
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/work"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            My Work
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/contact"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
