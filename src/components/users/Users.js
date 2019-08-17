import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    return (
      <div className='py-3 row'>
        {this.props.users.map(user => (
          <div key={user.id} className='col-md-4 px-1'>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
