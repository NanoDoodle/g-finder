import React, { useContext, useRef, useEffect } from "react";
import GithubContext from "../../context/github/githubContext";

const TrendingFilter = () => {
  const githubContext = useContext(GithubContext);
  const { filterLanguage, filteredLanguage, clearFilter } = githubContext;
  const text = useRef("");

  useEffect(() => {
    if (filteredLanguage === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== " ") {
      return filterLanguage(e.target.value);
    } else {
      return clearFilter();
    }
  };
  return (
    <div>
      <p>Select a language</p>
      <div className="dropdown-search-bar-container">
        <form>
          <input
            ref={text}
            type="text"
            className="dropdown-search-bar"
            placeholder="Filter by language"
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default TrendingFilter;
