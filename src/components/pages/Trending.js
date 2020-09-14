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
    setSelectedLanguage,
    selectedLanguage,
    getLanguageList,
    languageList,
  } = githubContext;
  useEffect(() => {
    getTrendingRepos();
    getLanguageList();
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
                    {selectedLanguage}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {languageList.map((language) => {
                      return (
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={() => {
                            setSelectedLanguage(language.name);
                            setSelectedTime("This Week");
                            filterTrendingRepos(
                              language.urlParam,
                              selectedTime === "Today"
                                ? "daily"
                                : selectedTime === "This Week"
                                ? "weekly"
                                : "monthly"
                            );
                          }}
                        >
                          {language.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="time-filter-dropdown">
                <div class="dropdown ">
                  <button
                    class="btn btn-secondary dropdown-toggle time-filter-dropdown-btn"
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
                      onClick={() => {
                        setSelectedTime("Today");
                        filterTrendingRepos("", "daily");
                      }}
                    >
                      {" "}
                      Today
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedTime("This Week");
                        filterTrendingRepos("", "weekly");
                      }}
                    >
                      This Week
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedTime("This month");
                        filterTrendingRepos("", "monthly");
                      }}
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
