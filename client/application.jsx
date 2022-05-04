import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./style.css";
import Favicon from "react-favicon";

import { FrontPage } from "./pages/frontPage";
import { LoginPage } from "./pages/loginPage";
import { Profile } from "./pages/profile";
import { ListArticles } from "./pages/listArticles";
//import { AddNewMovie } from "./pages/addNewMovie";

import { useLoading } from "./useLoader";
import { ApiContext } from "./useContext";
import { ListTopics } from "./pages/listTopics";

function UserActions({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return (
      <Link to={"/login"} class={"header-btn"}>
        Login
      </Link>
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
        <Link to={"/profile"} class={"header-btn"}>
          {user.google?.name ? `Profile for ${user.google.name}` : "Profile"}
        </Link>
        <Link to={"/login/endsession"} class={"header-btn"}>
          Log out
        </Link>
      </>
    );
  }

  if (user.microsoft !== undefined) {
    return (
      <>
        <Link to={"/profile"} class={"header-btn"}>
          {user.microsoft?.name
            ? `Profile for ${user.microsoft.name}`
            : "Profile"}
        </Link>
        <Link to={"/login/endsession"} class={"header-btn"}>
          Log out
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
      <div class={"container"}>
        <header>
          <Link to={"/"} id={"app-name"}>
            <h1>Fyrstikkposten</h1>
          </Link>
          <div className="menu-divider" />
          <UserActions user={data?.user} />
        </header>

        <nav>
          <h1>NAV BAR</h1>
          <ListTopics />
        </nav>

        <main>
          <h1>Content</h1>
          <Routes>
            <Route path={"/"} element={<FrontPage />} />
            <Route
              path={"/login/*"}
              element={<LoginPage config={data.config} reload={reload} />}
            />
            <Route path={"/profile"} element={<Profile user={data?.user} />} />
            <Route path={"/news"} element={<ListArticles />} />
            <Route path={"*"} element={<h1>Not found</h1>} />
          </Routes>
        </main>

        <footer>
          <p>
            “This project exam has been completed as part of the education at
            Kristiania University College. The college is not responsible for
            the thesis' methods, results, conclusions or recommendations.”
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
