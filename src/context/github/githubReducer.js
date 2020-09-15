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
  // SET_CURRENT,
  // CLEAR_CURRENT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        repos: [],
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        users: [],
        repos: [],
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        userRepos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_REPOS:
      return {
        ...state,
        trendingRepos: action.payload,
        loading: false,
      };
    case FILTER_TRENDING_REPOS:
      return {
        ...state,
        trendingRepos: action.payload,
        loading: false,
      };
    case GET_LANGUAGE_LIST:
      return {
        ...state,
        languageList: action.payload,
        loading: false,
      };
    case SET_SELECTED_TIME:
      return {
        ...state,
        selectedTime: action.payload,
      };
    case SET_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case FILTER_LANGUAGE:
      return {
        ...state,
        filteredLanguage: state.languageList.filter((language) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return language.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filterd: null,
      };
    // case CLEAR_CURRENT:
    //   return {
    //     ...state,
    //     current: null,
    //   };
    // case SET_CURRENT:
    //   return {
    //     ...state,
    //     current: action.payload,
    //   };
    default:
      return state;
  }
};
