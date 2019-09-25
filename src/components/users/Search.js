import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const [searchType, setSearchType] = useState("Users");

  const onClickUsers = e => setSearchType("Users");
  const onClickRepos = e => setSearchType("Repos");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter someting", "warning");
    } else if (searchType === "Users") {
      githubContext.searchUsers(text);
      setText("");
    } else if (searchType === "Repos") {
      githubContext.searchRepos(text);
      setText("");
    }
  };

  return (
    <div className='row search'>
      {/* Info and background picture */}
      <div className='col-md-6 h-100 d-none d-md-block'>
        <h2 className='title'>
          Explore <span className='text-orange'>interesting</span> things on
          GitHub
        </h2>
      </div>
      <div className='col-md-6 h-100 search-bg'></div>
      {/* Search form and clear button */}
      <div className='row search-form w-100'>
        <div className='col-md-8 px-5 mx-auto'>
          <form onSubmit={onSubmit} className='form'>
            {/* Input */}
            <div className='input-group my-3'>
              {/* Dropdown menu */}
              <div class='input-group-prepend dropdown-search'>
                <button
                  className='btn btn-primary dropdown-toggle'
                  type='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {searchType}
                </button>
                <div class='dropdown-menu'>
                  <a class='dropdown-item' href='#!' onClick={onClickUsers}>
                    Search Users
                  </a>
                  <a class='dropdown-item' href='#!' onClick={onClickRepos}>
                    Search Repos
                  </a>
                </div>
              </div>
              <input
                type='text'
                name='text'
                placeholder=''
                className='form-control search-input'
                value={text}
                onChange={onChange}
              />
              <input type='submit' value='Search' className='btn btn-search' />
              {githubContext.users.length + githubContext.repos.length > 0 && (
                <button
                  onClick={githubContext.clearSearch}
                  className='btn btn-clear px-3'
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
