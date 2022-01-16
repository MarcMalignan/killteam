import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Kill Team Tools</h1>
      </Link>
      <nav>
        <Link to="/army">Army sheet</Link>
      </nav>
    </header>
  );
};
