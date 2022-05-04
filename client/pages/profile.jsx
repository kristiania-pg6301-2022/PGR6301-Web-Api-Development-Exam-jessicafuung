import { Link } from "react-router-dom";
import React from "react";

export function Profile({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return <h1>Please login first</h1>;
  }

  if (user.google !== undefined) {
    const { name, email, picture } = user.google;

    return (
      <div id={"profile-div"}>
        <h1>Profile for {name}</h1>
        <div>
          <img src={picture} />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
  if (user.microsoft !== undefined) {
    const { name, email, picture } = user.microsoft;
    return (
      <div className={"CenterDiv"}>
        <h1>Profile</h1>
        <div>
          <img src={picture} />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
}
