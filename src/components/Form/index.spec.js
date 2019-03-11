import React from "react";
import { shallow } from "enzyme";
import Form from "./index";

it("form renders without crashing", () => {
  shallow(<Form />);
});

it('renders a url input', () => {
  expect(shallow(<Form />).find('#url').length).toEqual(1)
 });

it('renders a title input', () => {
  expect(shallow(<Form />).find('#title').length).toEqual(1)
 });

 