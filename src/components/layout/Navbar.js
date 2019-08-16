import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: ["G-finder"],
    icon: "fab fa-github"
  };
  static propsTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className='navbar bg-info text-light'>
        <h1 className='mb-0' style={{ fontSize: "30px" }}>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
