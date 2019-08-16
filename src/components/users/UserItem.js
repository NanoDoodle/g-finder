import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center py-2'>
        <img
          src={avatar_url}
          alt=''
          className='rounded-circle mx-auto'
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className='btn btn-dark'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
