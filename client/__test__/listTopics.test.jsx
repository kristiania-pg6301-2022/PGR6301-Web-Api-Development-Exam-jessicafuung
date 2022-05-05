import { ListTopics } from "../pages/listTopics";

import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { FrontPage } from "../pages/frontPage";

describe("List topics", () => {
  it("snapshot", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ListTopics />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
