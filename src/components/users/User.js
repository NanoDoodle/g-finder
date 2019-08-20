import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

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

  return (
    <Fragment>
      <div className='container'>
        <div>
          <Link to='/' className='btn btn-light mr-4'>
            Back To Search
          </Link>
          Hireable:{""}
          {hireable ? (
            <i className='fas fa-check-circle text-success' />
          ) : (
            <i className='fas fa-times-circle text-danger' />
          )}
        </div>
        <div className='row'>
          <div className='col-md-12 mx-auto'>
            <div className='card'>
              <div className='card-head text-center pt-3 bg-light'>
                <img
                  src={avatar_url}
                  className='rounded-circle'
                  style={{ width: "100px" }}
                  alt='avatar'
                />
                <h2>{name}</h2>
                <p>Location:{location}</p>
              </div>
              <div className='card-body'>
                {bio && (
                  <Fragment>
                    <div className='ml-4'>
                      <h3>Bio</h3>
                      <p>{bio}</p>
                    </div>
                  </Fragment>
                )}
                <a href={html_url} className='btn btn-dark ml-4 mb-2'>
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username:</strong>
                        {login}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company:</strong>
                        {company}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Blog:</strong>
                        {blog}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username:</strong>
                        {login}
                      </Fragment>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className='card'>
              <div className='card-body text-center'>
                <div className='badge badge-success mx-2'>
                  Followers:{followers}
                </div>
                <div className='badge badge-warning mx-2'>
                  Following:{following}
                </div>
                <div className='badge badge-info mx-2'>
                  Public Repos:{public_repos}
                </div>
                <div className='badge badge-light mx-2'>
                  Public Gists:{public_gists}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;
