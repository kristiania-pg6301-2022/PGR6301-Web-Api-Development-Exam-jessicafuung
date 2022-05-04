import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./style.css";
import Favicon from "react-favicon";

import { FrontPage } from "./pages/frontPage";
import { LoginPage } from "./pages/loginPage";
import { Profile } from "./pages/profile";
//import { ListMovies } from "./pages/listMovies";
//import { AddNewMovie } from "./pages/addNewMovie";

import { useLoading } from "./useLoader";
import { ApiContext } from "./useContext";

function UserActions({ user }) {
    if (!user || Object.keys(user).length === 0) {
        return <Link to={"/login"} class={"nav-btn"}>Login</Link>;
    }

    if(user.google !== undefined) {
        return (
            <>
                <Link to={"/profile"}>
                    <img src={user.google?.picture} style={{borderRadius: 100, padding: 7, width: 30}}/>
                </Link>
                <Link to={"/profile"} class={"nav-btn"}>
                    {user.google?.name ? `Profile for ${user.google.name}` : "Profile"}
                </Link>
                <Link to={"/login/endsession"} class={"nav-btn"}>Log out</Link>
            </>
        );
    }

    if(user.microsoft !== undefined) {
        return (
            <>
                <Link to={"/profile"} class={"nav-btn"}>
                    {user.microsoft?.name ? `Profile for ${user.microsoft.name}` : "Profile"}
                </Link>
                <Link to={"/login/endsession"} class={"nav-btn"}>Log out</Link>
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
            <Favicon url='https://pbs.twimg.com/profile_images/461372964252823553/ZbLzWtYH_400x400.jpeg' />
            <header>
                <Link to={"/"} class={"nav-btn"}>Front page</Link>
                <div className="menu-divider" />
                <UserActions user={data?.user} />
            </header>
            <main>
                <Routes>
                    <Route path={"/"} element={<FrontPage />} />
                    <Route
                        path={"/login/*"}
                        element={<LoginPage config={data.config} reload={reload} />}
                    />
                    <Route path={"/profile"} element={<Profile user={data?.user} />} />
                    <Route path={"*"} element={<h1>Not found</h1>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}