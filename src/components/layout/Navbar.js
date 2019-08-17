import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-info text-light'>
      <h1 className='mb-0' style={{ fontSize: "30px" }}>
        <i className={icon} />
        {title}
      </h1>
    </div>
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
