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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="trending-card">
              <div>
                <img
                  className="trending-card-main-img mx-auto"
                  src={trendingRepo.avatar}
                />
                <div className="trending-card-header">
                  <h4>{trendingRepo.author}</h4>
                  <p className="">View Profile</p>
                </div>
              </div>
              <a href="#" className="trending-card-repos">
                {trendingRepo.name}
              </a>
              <div className="trending-card-language">
                <i className="fas fa-circle trending-card-language-icon" />
                Javascript{" "}
                <span className="trending-card-author">Build by</span>
                {trendingRepo.builtBy.map((user) => {
                  return (
                    <img
                      src={user.avatar}
                      alt=""
                      className="trending-card-author-img"
                    />
                  );
                })}
              </div>
              <p>A group video call for the web. No signups. No downloads.</p>
              <div className="repoLable mb-0 pb-0">
                <SvgWatch />
                {trendingRepo.stars}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SvgFork />
                {trendingRepo.forks}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SvgStar />
                {trendingRepo.currentPeriodStars}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        );
      })}

      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="trending-card">
          <div>
            <img
              className="trending-card-main-img mx-auto"
              src={require("../../images/m1.jpeg")}
            />
            <div className="trending-card-header">
              <h4>vasnathv</h4>
              <p className="">View Profile</p>
            </div>
          </div>
          <a href="#" className="trending-card-repos">
            talk
          </a>
          <div className="trending-card-language">
            <i className="fas fa-circle trending-card-language-icon" />
            Javascript <span className="trending-card-author">Build by</span>
            <img
              src={require("../../images/m1.jpeg")}
              alt=""
              className="trending-card-author-img"
            />
          </div>
          <p>A group video call for the web. No signups. No downloads.</p>
          <div className="repoLable mb-0 pb-0">
            <SvgWatch />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SvgFork />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SvgStar />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="trending-card">
          <div>
            <img
              className="trending-card-main-img mx-auto"
              src={require("../../images/m1.jpeg")}
            />
            <div className="trending-card-header">
              <h4>vasnathv</h4>
              <p className="">View Profile</p>
            </div>
          </div>
          <a href="#" className="trending-card-repos">
            talk
          </a>
          <div className="trending-card-language">
            <i className="fas fa-circle trending-card-language-icon" />
            Javascript <span className="trending-card-author">Build by</span>
            <img
              src={require("../../images/m1.jpeg")}
              alt=""
              className="trending-card-author-img"
            />
          </div>
          <p>A group video call for the web. No signups. No downloads.</p>
          <div className="repoLable mb-0 pb-0">
            <SvgWatch />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SvgFork />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SvgStar />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingList;
