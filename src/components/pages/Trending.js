import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import TrendingList from "../trending/TrendingList";

const Trending = () => {
  const githubContext = useContext(GithubContext);
  const {
    getTrendingRepos,
    filterTrendingRepos,
    setSelectedTime,
    selectedTime,
  } = githubContext;
  useEffect(() => {
    getTrendingRepos();
    filterTrendingRepos("c%23", "weekly");
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="trending-page-header">Trending Repos</h1>
          </div>
          <div className="col-lg-6">
            <div className="trending-filter-container">
              <div className="language-filter-dropdown">
                <div class="dropdown language-filter-dropdown-btn">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    All Languages
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="time-filter-dropdown">
                <div class="dropdown time-filter-dropdown-btn">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {selectedTime}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setSelectedTime("Today")}
                    >
                      Today
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setSelectedTime("This Week")}
                    >
                      This Week
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setSelectedTime("This month")}
                    >
                      This month
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrendingList />
      </div>
    </div>
  );
};

export default Trending;
