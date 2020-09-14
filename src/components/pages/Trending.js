import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const svgStar = (
  <svg
    className="octicon octicon-star v-align-text-bottom"
    viewBox="0 0 14 16"
    version="1.1"
    width="14"
    height="16"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
    ></path>
  </svg>
);

const svgFork = (
  <svg
    className="octicon octicon-repo-forked v-align-text-bottom"
    viewBox="0 0 10 16"
    version="1.1"
    width="10"
    height="16"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
    ></path>
  </svg>
);

const svgWatch = (
  <svg
    className="octicon octicon-eye v-align-text-bottom"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    height="16"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
    ></path>
  </svg>
);

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
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="trending-card">
              <div>
                <img
                  className="trending-card-main-img mx-auto"
                  src={require("./m1.jpeg")}
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
                Javascript{" "}
                <span className="trending-card-author">Build by</span>
                <img
                  src={require("./m1.jpeg")}
                  alt=""
                  className="trending-card-author-img"
                />
              </div>
              <p>A group video call for the web. No signups. No downloads.</p>
              <div className="repoLable mb-0 pb-0">
                {svgStar}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{svgFork}&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                {svgWatch}&nbsp;
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="trending-card">
              <div>
                <img
                  className="trending-card-main-img mx-auto"
                  src={require("./m1.jpeg")}
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
                Javascript{" "}
                <span className="trending-card-author">Build by</span>
                <img
                  src={require("./m1.jpeg")}
                  alt=""
                  className="trending-card-author-img"
                />
              </div>
              <p>A group video call for the web. No signups. No downloads.</p>
              <div className="repoLable mb-0 pb-0">
                {svgStar}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{svgFork}&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                {svgWatch}&nbsp;
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="trending-card">
              <div>
                <img
                  className="trending-card-main-img mx-auto"
                  src={require("./m1.jpeg")}
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
                Javascript{" "}
                <span className="trending-card-author">Build by</span>
                <img
                  src={require("./m1.jpeg")}
                  alt=""
                  className="trending-card-author-img"
                />
              </div>
              <p>A group video call for the web. No signups. No downloads.</p>
              <div className="repoLable mb-0 pb-0">
                {svgStar}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{svgFork}&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                {svgWatch}&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
