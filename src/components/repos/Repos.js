import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return repos.map(repo => (
    <div key={repo.id} className='col-md-4 px-1'>
      <RepoItem repo={repo} />
    </div>
  ));
};

Repos.protoTypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
