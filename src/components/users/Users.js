import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";
import scubatocat from "../../images/scubatocat.png";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (users.length === 0 && !loading) {
    return (
      <div className='row d-none d-md-block'>
        <div className='col-12' style={{ height: "100px" }}>
          <img
            src={scubatocat}
            alt='scubatocat'
            className='scubatocat animated slideInUp'
          ></img>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='py-3 row' style={{ position: "relative", top: "-30px" }}>
        {users.map(user => (
          <div key={user.id} className='col-md-4 px-1'>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
};

export default Users;
