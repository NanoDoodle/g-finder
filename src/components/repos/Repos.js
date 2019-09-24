import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  //Order repos by star down
  // const orderStarDown = (x, y) => {
  //   return y.stargazers_count - x.stargazers_count;
  // };
  // repos = repos.sort(orderStarDown);

  //List all repos
  return repos.map(repo => (
    <div key={repo.id} className='col-md-4 p-0 m-0'>
      <RepoItem repo={repo} />
    </div>
  ));
};

Repos.protoTypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
