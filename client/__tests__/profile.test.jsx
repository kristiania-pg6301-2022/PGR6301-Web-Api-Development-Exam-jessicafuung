import { Profile } from "../pages/profile";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

describe("profile", () => {
  it("snapshot", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
