import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import TrendingItem from "./TrendingItem";
import spidertocat from "../../images/spidertocat.png";
import Spinner from "../layout/Spinner";

const TrendingList = () => {
  const githubContext = useContext(GithubContext);
  const {
    trendingRepos,
    selectedLanguage,
    trendingRepoLoading,
  } = githubContext;

  if (trendingRepoLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="row">
      {trendingRepos.length === 0 && trendingRepoLoading === false ? (
        <div>
          <img
            src={spidertocat}
            alt=""
            className="trending-repos-no-result-image animated slideInDown"
          />

          <p className="trending-repos-no-result">
            Oops...No trending repos with {selectedLanguage.name}!
          </p>
        </div>
      ) : (
        trendingRepos.map((trendingRepo) => {
          return (
            <TrendingItem key={trendingRepo.url} trendingRepo={trendingRepo} />
          );
        })
      )}
    </div>
  );
};

export default TrendingList;
