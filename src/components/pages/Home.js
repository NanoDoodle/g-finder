import React, { Fragment } from "react";
import Search from "../users/Search";
import SearchResults from "../users/SearchResults";

const Home = () => (
  <Fragment>
    <Search />
    <SearchResults />
  </Fragment>
);
export default Home;
