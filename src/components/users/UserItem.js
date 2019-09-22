import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, score } }) => {
  return (
    <div className='card user-card text-center py-3 my-1 '>
      <img
        src={avatar_url}
        alt=''
        className='mx-auto'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <p className='score'>Match score:{score}</p>

      <div>
        <Link to={`/user/${login}`} className='btn btn-dark'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
