import { FrontPage } from "../pages/frontPage";

import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { Profile } from "../pages/profile";

const article = {
  title: "tittel test",
  topic: "topic test",
  author: "author test",
  articleText: "articleText test",
};

describe("Front page", () => {
  it("snapshot1", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });

  it("snapshot2", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
