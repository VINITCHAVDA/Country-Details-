import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <p>this whose ERROR.{error.status}</p>
    </div>
  );
};

export default Error;
