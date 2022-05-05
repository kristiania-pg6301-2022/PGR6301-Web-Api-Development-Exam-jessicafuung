import {
  EndSession,
  LoginCallback,
  LoginPage,
  StartLogin,
} from "../pages/loginPage";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

describe("login", () => {
  it("snapshot 1", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("snapshot 2", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <StartLogin />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("snapshot 3", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <LoginCallback />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("snapshot 4", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <EndSession />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
