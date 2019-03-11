import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("form renders without crashing", () => {
  shallow(<App />);
});
