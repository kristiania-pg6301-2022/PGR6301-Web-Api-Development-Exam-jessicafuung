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
    </div>
  );
}
