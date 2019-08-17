import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='py-3 row'>
        {users.map(user => (
          <div key={user.id} className='col-md-4 px-1'>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
};
Users.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
export default Users;
