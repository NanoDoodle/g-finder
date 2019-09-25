import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  const githubContext = useContext(GithubContext);

  const { clearSearch } = githubContext;

  return (
    <nav className='navbar text-primary navbar-expand'>
      <div className='container'>
        <Link className='nav-link text-primary' onClick={clearSearch} to='/'>
          <h1 className='mb-0'>
            <i className={icon} />
            {title}
          </h1>
        </Link>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link
              className='nav-link text-primary'
              onClick={clearSearch}
              to='/'
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-primary' to='/about'>
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
