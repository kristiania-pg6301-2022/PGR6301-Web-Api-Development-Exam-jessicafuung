import { AddNewArticle } from "../pages/addArticle";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

describe("add article", () => {
  it("article form", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <AddNewArticle />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
