import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className='card user-card text-center py-3 my-1 '>
      <div className='card-body'>
        <h5>
          <a className='text-secondary pl-3' href={repo.html_url}>
            {repo.name}
          </a>
        </h5>
        {repo.language}
        {repo.updated_at}
        <div className=''>
          Stars:{repo.stargazers_count}Forks:{repo.forks_count}
          watchers:{repo.watchers_count}
        </div>
        {repo.description}
      </div>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
