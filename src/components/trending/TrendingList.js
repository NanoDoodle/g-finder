import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import TrendingItem from "./TrendingItem";

const TrendingList = () => {
  const githubContext = useContext(GithubContext);
  const { trendingRepos } = githubContext;
  return (
    <div className="row">
      {trendingRepos.map((trendingRepo) => {
        return (
          <TrendingItem key={trendingRepo.url} trendingRepo={trendingRepo} />
        );
      })}
    </div>
  );
};

export default TrendingList;
