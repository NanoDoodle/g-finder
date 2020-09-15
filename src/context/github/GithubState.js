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
  GET_USER,
  GET_TRENDING_REPOS,
  GET_LANGUAGE_LIST,
  SET_SELECTED_LANGUAGE,
  SET_SELECTED_TIME,
  FILTER_TRENDING_REPOS,
  FILTER_LANGUAGE,
  CLEAR_FILTER,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  //initialState is the initial states of the app
  const initialState = {
    users: [],
    user: {},
    repos: [],
    userRepos: [],
    loading: false,
    trendingRepos: [],
    selectedTime: "This Week",
    languageList: [],
    selectedLanguage: "All Languages",
    filteredLanguage: null,
    current: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Github Users
  const searchUsers = async (text) => {
    clearSearch();
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Search Github Repos
  const searchRepos = async (text) => {
    clearSearch();
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}&sort=stars&order=desc`
    );

    dispatch({
      type: SEARCH_REPOS,
      payload: res.data.items,
    });
  };

  // Get single Github user
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get users repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=300&sort=updated:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Clear repos from state
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Get trending Repos
  const getTrendingRepos = async () => {
    setLoading();
    const res = await axios.get(`https://ghapi.huchen.dev/repositories`);
    dispatch({
      type: GET_TRENDING_REPOS,
      payload: res.data,
    });
  };

  //Get Language List
  const getLanguageList = async () => {
    setLoading();
    const res = await axios.get(`https://ghapi.huchen.dev/languages`);
    dispatch({
      type: GET_LANGUAGE_LIST,
      payload: res.data,
    });
  };

  //Set Time
  const setSelectedTime = (time) => {
    setLoading();
    dispatch({
      type: SET_SELECTED_TIME,
      payload: time,
    });
  };

  //Set Language
  const setSelectedLanguage = (language) => {
    setLoading();
    dispatch({
      type: SET_SELECTED_LANGUAGE,
      payload: language,
    });
  };

  //Filter Trending Repos
  const filterTrendingRepos = async (language, time) => {
    setLoading();
    const res = await axios.get(
      `https://ghapi.huchen.dev/repositories?language=${language}&since=${time}`
    );
    console.log(res.data);
    dispatch({
      type: FILTER_TRENDING_REPOS,
      payload: res.data,
    });
  };

  //Filter Language
  const filterLanguage = (text) => {
    setLoading();
    dispatch({
      type: FILTER_LANGUAGE,
      payload: text,
    });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        userRepos: state.userRepos,
        loading: state.loading,
        trendingRepos: state.trendingRepos,
        selectedTime: state.selectedTime,
        selectedLanguage: state.selectedLanguage,
        languageList: state.languageList,
        filteredLanguage: state.filteredLanguage,
        searchUsers,
        searchRepos,
        clearUsers,
        clearSearch,
        getUser,
        getUserRepos,
        getTrendingRepos,
        setSelectedTime,
        filterTrendingRepos,
        setSelectedLanguage,
        getLanguageList,
        filterLanguage,
        clearFilter,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
