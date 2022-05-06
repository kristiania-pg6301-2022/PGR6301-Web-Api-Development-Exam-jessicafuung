import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./style.css";
import Favicon from "react-favicon";

import { FrontPage } from "./pages/frontPage";
import { LoginPage } from "./pages/loginPage";
import { Profile } from "./pages/profile";
import { ListArticles } from "./pages/listArticles";

import { useLoading } from "./useLoader";
import { ApiContext } from "./useContext";
import { ListTopics } from "./pages/listTopics";
import { AddNewArticle } from "./pages/addArticle";
import { EditArticle } from "./pages/editArticle";

function UserActions({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return (
      <div style={{ marginTop: 30 }}>
        <Link to={"/login"} className={"header-btn"}>
          Logg inn
        </Link>
      </div>
    );
  }

  if (user.google !== undefined) {
    return (
      <>
        <Link to={"/profile"}>
          <img
            src={user.google?.picture}
            alt={"profile picture"}
            style={{ borderRadius: 100, marginTop: 17, padding: 7, width: 30 }}
          />
        </Link>
        <Link to={"/profile"} className={"header-btn"}>
          {user.google?.name ? `Profilen til ${user.google.name}` : "Profile"}
        </Link>
        <Link to={"/login/endsession"} className={"header-btn"}>
          Logg ut
        </Link>
      </>
    );
  }

  if (user.microsoft !== undefined) {
    return (
      <>
        <Link to={"/news/edit"} className={"header-btn"}>
          Rediger en artikkel
        </Link>
        <Link to={"/news/write"} className={"header-btn"}>
          Skriv en artikkel
        </Link>
        <Link to={"/profile"} className={"header-btn"}>
          {user.microsoft?.name
            ? `Profilen til ${user.microsoft.name}`
            : "Profile"}
        </Link>
        <Link to={"/login/endsession"} class={"header-btn"}>
          Logg ut
        </Link>
      </>
    );
  }
}

export function Application() {
  const { fetchLogin } = useContext(ApiContext);
  const { data, error, loading, reload } = useLoading(fetchLogin);

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }
  if (loading) {
    return <div>Please wait...</div>;
  }

  return (
    <BrowserRouter>
      <Favicon url="https://pbs.twimg.com/profile_images/461372964252823553/ZbLzWtYH_400x400.jpeg" />

      <div className={"container"}>
        <header>
          <Link to={"/"} id={"app-name"}>
            <h1>Fyrstikkposten</h1>
          </Link>
          <div className="menu-divider" />
          <UserActions user={data?.user} />
        </header>

        <nav>
          <h1 id={"sidebar-title"}>Nyheter</h1>
          <ListTopics />
        </nav>

        <main>
          <Routes>
            <Route path={"/"} element={<FrontPage user={data?.user} />} />
            <Route
              path={"/login/*"}
              element={<LoginPage config={data.config} reload={reload} />}
            />
            <Route path={"/profile"} element={<Profile user={data?.user} />} />
            <Route path={"/news"} element={<ListArticles />} />

            <Route
              path={"/news/write"}
              element={<AddNewArticle user={data?.user} />}
            />

            <Route
              path={"/news/edit"}
              element={<EditArticle user={data?.user} />}
            />

            <Route path={"*"} element={<h1>Not found</h1>} />
          </Routes>
        </main>

        <footer>
          <p>
            “Denne prosjekteksamenen er gjennomført som en del av utdanningen
            ved Høyskolen Kristiania. Høgskolen er ikke ansvarlig for oppgavens
            metoder, resultater, konklusjoner eller anbefalinger.”
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
