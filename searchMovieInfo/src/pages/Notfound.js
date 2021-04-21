import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <br />
      <h1 className="title is-1">404!</h1>
      <h2>Can Not Found the Page You are Looking for</h2>
      <Link to="/" className="button is-link">
        {" "}
        Back to Home{" "}
      </Link>
    </div>
  );
};
