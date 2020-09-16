import React from "react";
import { ReactComponent as SvgStar } from "../../images/svgStar.svg";
import { ReactComponent as SvgFork } from "../../images/svgFork.svg";
import { ReactComponent as SvgWatch } from "../../images/svgWatch.svg";

const TrendingItem = ({ trendingRepo }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="trending-card">
        <div>
          <a href={`https://github.com/${trendingRepo.author}`} target="_blank">
            <img
              className="trending-card-main-img mx-auto"
              src={trendingRepo.avatar}
            />
          </a>
          <div className="trending-card-header">
            <a
              href={`https://github.com/${trendingRepo.author}`}
              target="_blank"
            >
              <h4>{trendingRepo.author}</h4>
            </a>
            <a
              href={`https://github.com/${trendingRepo.author}`}
              target="_blank"
            >
              View Profile
            </a>
          </div>
        </div>
        <div className="trending-card-repos">
          <a href={trendingRepo.url} target="_blank">
            {trendingRepo.name}
          </a>
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
              <a href={user.href} key={user.href} target="_blank">
                <img
                  src={user.avatar}
                  alt=""
                  className="trending-card-author-img"
                />
              </a>
            );
          })}
        </div>
        <p className="trending-card-description">{trendingRepo.description}</p>
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
};

export default TrendingItem;
