import { Link } from "react-router-dom";
import React from "react";

export function FrontPage() {
  return (
    <div>
      <div>
        <h3>Front Page</h3>

        <ul>
          <li>
            <Link to={<h1>Topic</h1>}>Topic</Link>
          </li>
          <li>
            <Link to={<h1>Topic</h1>}>Topic</Link>
          </li>
          <li>
            <Link to={<h1>Topic</h1>}>Topic</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>should probably for loop</h3>
        <ul>
          <li>
            <Link to={"/movies/new"}>Add new movie</Link>
          </li>
          <li>
            <Link to={"/movies/new"}>Add new movie</Link>
          </li>
          <li>
            <Link to={"/movies/new"}>Add new movie</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
