import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter someting", "warning");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div className='input-group input-group my-3'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            className='form-control'
            value={text}
            onChange={onChange}
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
};

Search.protoTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
