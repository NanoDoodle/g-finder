import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import TrendingList from "../trending/TrendingList";

const Trending = () => {
  const githubContext = useContext(GithubContext);
  const { getTrendingRepos } = githubContext;
  useEffect(() => {
    getTrendingRepos();
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="trending-page-header">Trending Repos</h1>
        <TrendingList />
      </div>
    </div>
  );
};

export default Trending;
