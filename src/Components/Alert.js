import React from "react";

function Alert(props) {
  const {message, type} = props;
  return (
    <>
      <div className={`alert alert-${type}`} role="alert">
        {message}
      </div>
    </>
  );
}

export default Alert;
