import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };
  static propsTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <div className='input-group input-group my-3'>
            <input
              type='text'
              name='text'
              placeholder='Search Users...'
              className='form-control'
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block my-2' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
