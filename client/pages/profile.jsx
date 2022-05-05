import { Link } from "react-router-dom";
import React from "react";

export function Profile({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return <h1>Vennligst logg inn først</h1>;
  }

  if (user.google !== undefined) {
    const { name, email, picture } = user.google;

    return (
      <div id={"profile-div"}>
        <h1>Din side</h1>
        <div>
          <img src={picture} />
          <p>Fullt navn: {name}</p>
          <p>Epost adresse: {email}</p>
        </div>
      </div>
    );
  }

  if (user.microsoft !== undefined) {
    const { name, email, picture } = user.microsoft;
    return (
      <div className={"CenterDiv"}>
        <h1>Din side</h1>
        <div>
          <img src={picture} />
          <p>Fullt navn: {name}</p>
          <p>Epost adresse: {email}</p>
        </div>
      </div>
    );
  }
}
