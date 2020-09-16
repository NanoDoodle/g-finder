import React, { useEffect, useContext } from "react";
import TrendingFilter from "../trending/TrendingFilter";
import GithubContext from "../../context/github/githubContext";
import TrendingList from "../trending/TrendingList";
import Spinner from "../layout/Spinner";

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
    filteredLanguage,
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
                <div className="dropdown ">
                  <button
                    className="btn btn-secondary dropdown-toggle language-filter-dropdown-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {selectedLanguage.name}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <TrendingFilter />
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedLanguage({
                          name: "All Languages",
                          urlParam: "",
                        });
                        filterTrendingRepos(
                          "",
                          selectedTime === "Today"
                            ? "daily"
                            : selectedTime === "This Week"
                            ? "weekly"
                            : "monthly"
                        );
                      }}
                    >
                      {" "}
                      All languages
                    </a>

                    {filteredLanguage == null
                      ? languageList.map((language) => {
                          return (
                            <a
                              className="dropdown-item"
                              href="#"
                              key={language.urlParam}
                              onClick={() => {
                                setSelectedLanguage(language);
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
                        })
                      : filteredLanguage.map((language) => {
                          return (
                            <a
                              className="dropdown-item"
                              href="#"
                              key={language.urlParam}
                              onClick={() => {
                                setSelectedLanguage(language);
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
                <div className="dropdown ">
                  <button
                    className="btn btn-secondary dropdown-toggle time-filter-dropdown-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {selectedTime}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedTime("Today");
                        filterTrendingRepos(selectedLanguage.urlParam, "daily");
                      }}
                    >
                      Today
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedTime("This Week");
                        filterTrendingRepos(
                          selectedLanguage.urlParam,
                          "weekly"
                        );
                      }}
                    >
                      This Week
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedTime("This month");
                        filterTrendingRepos(
                          selectedLanguage.urlParam,
                          "monthly"
                        );
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
