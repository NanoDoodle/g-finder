import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import UserRepos from "./UserRepos";

const RepoOrder = ({ userRepos }) => {
  const [order, setOrder] = useState("star");
  //   const repoOrderByUpdate = repos;

  //   const onClick = e => setOrder(e.target.value);
  const onClickStar = (e) => setOrder("star");
  const onClickWatch = (e) => setOrder("watch");
  const onClickFork = (e) => setOrder("fork");
  //   const onClickUpdate = e => setOrder("update");

  //Order repos by star down
  //Default order is by stars
  const orderStarDown = (x, y) => {
    if (order === "star") {
      return y.stargazers_count - x.stargazers_count;
    } else if (order === "watch") {
      return y.watchers_count - x.watchers_count;
    } else if (order === "fork") {
      return y.forks_count - x.forks_count;
    }
  };
  userRepos = userRepos.sort(orderStarDown);
  //   order !== "update"
  //     ? (repos = repos.sort(orderStarDown))
  //     : (repos = repoOrderByUpdate);

  //Order Row
  const orderRow = (
    <div className="row repoOrder mx-2">
      <div className="col-sm-10 pl-1">
        <h4 className="text-primary">
          User repos order by <span className="text-secondary">{order}</span>
        </h4>
      </div>
      <div className="col-sm-2 ml-auto text-center p-0">
        <div class="dropdown  ">
          <button
            class="btn btn-secondary btn-block dropdown-toggle py-0 mr-1"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            // aria-expanded='false'
          >
            Ordered by
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
          >
            <a
              class="dropdown-item"
              href="#!"
              value="star"
              onClick={onClickStar}
            >
              Star
            </a>
            <a
              class="dropdown-item"
              href="#!"
              value="watch"
              onClick={onClickWatch}
            >
              Watch
            </a>
            <a
              class="dropdown-item"
              href="#!"
              value="fork"
              onClick={onClickFork}
            >
              Fork
            </a>
            {/* <a
              class='dropdown-item'
              href='#!'
              value='update'
              onClick={onClickUpdate}
            >
              Update
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );

  //List all repos
  return (
    <Fragment>
      {orderRow}
      <div className="row mx-1">
        <UserRepos userRepos={userRepos} />
      </div>
    </Fragment>
  );
};

UserRepos.protoTypes = {
  UserRepos: PropTypes.array.isRequired,
};
export default RepoOrder;
