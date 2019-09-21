import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className='row' style={{ height: "300px" }}>
        <div className='col-12 text-center my-auto'>
          <h1>About This App</h1>
          <p>App to search Github users</p>
          <p>Version 2.0.0</p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
