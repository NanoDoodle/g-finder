import React, { useContext } from "react";
import { ReactComponent as SvgStar } from "../../images/svgStar.svg";
import { ReactComponent as SvgFork } from "../../images/svgFork.svg";
import { ReactComponent as SvgWatch } from "../../images/svgWatch.svg";
import GithubContext from "../../context/github/githubContext";

const TrendingList = () => {
  const githubContext = useContext(GithubContext);
  const { trendingRepos } = githubContext;
  return (
    <div className="row">
      {console.log(trendingRepos)}
      {trendingRepos.map((trendingRepo) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-12" key={trendingRepo.url}>
            <div className="trending-card">
              <div>
                <img
                  className="trending-card-main-img mx-auto"
                  src={trendingRepo.avatar}
                />
                <div className="trending-card-header">
                  <h4>{trendingRepo.author}</h4>
                  <p>View Profile</p>
                </div>
              </div>
              <div className="trending-card-repos">
                <a href="#">{trendingRepo.name}</a>
              </div>
              <div className="trending-card-info">
                {trendingRepo.language ? (
                  <span className="trending-card-language">
                    <i className="fas fa-circle fa-sm trending-card-language-icon" />
                    {trendingRepo.language}
                  </span>
                ) : (
                  <span></span>
                )}
                <span className="trending-card-author">Build by</span>
                {trendingRepo.builtBy.map((user) => {
                  return (
                    
                    <img
                      src={user.avatar}
                      alt=""
                      key={user.href}
                      className="trending-card-author-img"
                    />
                  );
                })}
              </div>
              <p className="trending-card-description">
                {trendingRepo.description}
              </p>
              <div className="repoLable mb-0 pb-0">
                <SvgWatch />
                &nbsp;&nbsp;
                {trendingRepo.stars}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SvgFork />
                &nbsp;&nbsp;
                {trendingRepo.forks}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SvgStar />
                &nbsp;&nbsp;
                {trendingRepo.currentPeriodStars}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingList;
