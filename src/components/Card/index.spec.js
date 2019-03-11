import React from "react";
import { shallow } from "enzyme";
import Card from "./index";

const data = {
  feed: [
    {
      url: "https://thumbs.dreamstime.com/z/zip-line-26475548.jpghttps://",
      title: "ZipLine"
    }
  ]
};

it("Cards render without crashing", () => {
  shallow(<Card {...data.feed} />);
});
