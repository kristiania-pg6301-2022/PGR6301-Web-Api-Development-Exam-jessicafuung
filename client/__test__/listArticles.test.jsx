import { ListArticles } from "../pages/listArticles";

import React from "react";
import ReactDOM from "react-dom";

describe("List articles", () => {
  it("snapshot", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<ListArticles />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
