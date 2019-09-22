import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import bgImage from "../../images/filmtocats.png";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;
  // Back to search btn
  const backToSearchBtn = (
    <div className='ml-1'>
      <Link to='/' className='btn btn-secondary mr-4'>
        Back To Search
      </Link>
      Hireable:{""}
      {hireable ? (
        <i className='fas fa-check-circle text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
    </div>
  );

  return (
    <Fragment>
      {backToSearchBtn}
      {/* Profile */}

      <div className='row profile py-5 mx-1'>
        {/* Bg image */}
        <div className='col-md-6 d-none d-md-block'></div>
        <div className='col-md-6 m-0 p-0'>
          <div className='bg-image text-center w-100 mr-5'>
            <img className='mr-5' src={bgImage}></img>
          </div>
        </div>
        {/* Profile Info */}
        <div className='col-md-4 my-auto'>
          <div className='text-center pt-3'>
            <img
              src={avatar_url}
              className='rounded-circle'
              style={{ width: "120px" }}
              alt='avatar'
            />
            <h2>{name}</h2>
            <p>Location: {location}</p>
          </div>
        </div>
        <div className='col-md-8 my-auto'>
          <div className=''>
            {bio && (
              <Fragment>
                <div className='ml-4'>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </div>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-visit ml-4 mb-2'>
              Visit Github Profile
            </a>
            <ul>
              {login && (
                <li>
                  <strong>Username: </strong>
                  {login}
                </li>
              )}

              {company && (
                <li>
                  <strong>Company: </strong>
                  {company}
                </li>
              )}

              {blog && (
                <li>
                  <strong>Blog: </strong>
                  {blog}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* User badge */}
      <div className='row userBadge py-3 mb-2 mx-1'>
        <div className='col-12 '>
          <div className='text-center'>
            <div className='badge badge-secondary mx-2'>
              Followers: {followers}
            </div>
            <div className='badge badge-primary mx-2'>
              Following: {following}
            </div>
            <div className='badge badge-info mx-2'>
              Public Repos: {public_repos}
            </div>
            <div className='badge badge-warning mx-2'>
              Public Gists: {public_gists}
            </div>
          </div>
        </div>
      </div>

      {/* Repos */}
      <div className='row mx-1'>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;
