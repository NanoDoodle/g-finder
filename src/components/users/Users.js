import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";
import scubatocat from "../../images/scubatocat.png";
import RepoItem from "../../components/repos/RepoItem";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users, repos } = githubContext;

  if (users.length === 0 && repos.length === 0 && !loading) {
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
  } else if (users.length !== 0) {
    return (
      <div className='py-3 row' style={{ position: "relative", top: "-30px" }}>
        {users.map(user => (
          <div key={user.id} className='col-md-4 px-1'>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  } else if (repos.length !== 0) {
    return (
      <div className='py-3 row' style={{ position: "relative", top: "-30px" }}>
        {repos.map(repo => (
          <div key={repo.id} className='col-md-4 p-0 m-0'>
            <RepoItem repo={repo} />
          </div>
        ))}
      </div>
    );
  }
};

export default Users;
