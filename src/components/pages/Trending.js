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
      <h1>Trending Repos</h1>
      <div className="container">
        <TrendingList />
      </div>
    </div>
  );
};

export default Trending;
