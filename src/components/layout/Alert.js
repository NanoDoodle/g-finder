import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} my-3`}>
        <i className='fas fa-info-circle pr-2' />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
