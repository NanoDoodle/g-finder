import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Repos from "./Repos";

const RepoOrder = ({ repos }) => {
  //Order repos by star down
  const orderStarDown = (x, y) => {
    return y.stargazers_count - x.stargazers_count;
  };
  repos = repos.sort(orderStarDown);

  //Order
  const order = (
    <div className='row repoOrder mx-2'>
      <div className='col-sm-10 pl-1'>
        <h4 className='text-primary'>User repos</h4>
      </div>
      <div className='col-sm-2 ml-auto text-center p-0'>
        <div class='dropdown  '>
          <button
            class='btn btn-secondary btn-block dropdown-toggle py-0 mr-1'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            // aria-expanded='false'
          >
            Ordered by
          </button>
          <div
            class='dropdown-menu dropdown-menu-right'
            aria-labelledby='dropdownMenuButton'
          >
            <a class='dropdown-item' href='#!'>
              Star
            </a>
            <a class='dropdown-item' href='#!'>
              Watch
            </a>
            <a class='dropdown-item' href='#!'>
              Fork
            </a>
            <a class='dropdown-item' href='#!'>
              Update
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  //List all repos
  return (
    <Fragment>
      {order}
      <div className='row mx-1'>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

Repos.protoTypes = {
  repos: PropTypes.array.isRequired
};
export default RepoOrder;
