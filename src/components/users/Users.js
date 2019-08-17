import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import propTypes from "prop-types";

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
Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired
};
export default Users;
