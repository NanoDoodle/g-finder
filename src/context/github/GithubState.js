import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SEARCH_REPOS,
  SET_LOADING,
  CLEAR_USERS,
  CLEAR_SEARCH,
  GET_REPOS,
  GET_USER
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECTET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECTET;
}

const GithubState = props => {
  //initialState is the initial states of the app
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Github Users
  const searchUsers = async text => {
    clearSearch();
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Search Github Repos
  const searchRepos = async text => {
    clearSearch();
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}&sort=stars&order=desc`
      // `https://api.github.com/search/users?q=${text}&client_id=35799df5c142c4bf56f7&client_secret=bfcac39cbd5062bd8c260b999881889d7e6e83ee`
    );

    dispatch({
      type: SEARCH_REPOS,
      payload: res.data.items
    });
  };

  // Get single Github user
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get users repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=300&sort=updated:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Clear repos from state
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        searchRepos,
        clearUsers,
        clearSearch,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
