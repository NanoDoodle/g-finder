import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-info text-light navbar-expand'>
      <div className='container-fluid'>
        <h1 className='mb-0' style={{ fontSize: "30px" }}>
          <i className={icon} />
          {title}
        </h1>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link text-light' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-light' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: ["G-finder"],
  icon: "fab fa-github"
};
Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
