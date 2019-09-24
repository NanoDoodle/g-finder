import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const UserRepos = ({ userRepos }) => {
  //List all repos
  return userRepos.map(repo => (
    <div key={repo.id} className='col-md-4 p-0 m-0'>
      <RepoItem repo={repo} />
    </div>
  ));
};

UserRepos.protoTypes = {
  UserRepos: PropTypes.array.isRequired
};
export default UserRepos;
