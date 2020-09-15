import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import TrendingItem from "./TrendingItem";
import spidertocat from "../../images/spidertocat.png";

const TrendingList = () => {
  const githubContext = useContext(GithubContext);
  const { trendingRepos, selectedLanguage } = githubContext;

  return (
    <div className="row">
      {console.log(trendingRepos)}
      {trendingRepos.length === 0 ? (
        <div>
          <img
            src={spidertocat}
            alt=""
            className="trending-repos-no-result-image animated slideInDown"
          />

          <p className="trending-repos-no-result">
            Oops...No trending repos with {selectedLanguage}!
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
