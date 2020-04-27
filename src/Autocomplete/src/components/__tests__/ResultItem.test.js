import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import ResultItem from "../ResultItem";

const handleClickItem = () => {
  console.log("test");
};

const changeActiveOption = () => {
  console.group("test1");
};

const item = { label: "JavaScript" };

describe("ResultItem", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <ResultItem
        item={item}
        index={0}
        activeOption={1}
        handleClickItem={handleClickItem}
        changeActiveOption={changeActiveOption}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the inner text", () => {
    const wrapper = mount(
      <ResultItem
        item={item}
        index={0}
        activeOption={1}
        handleClickItem={handleClickItem}
        changeActiveOption={changeActiveOption}
      />
    );
    expect(
      wrapper
        .find("div")
        .text())
        .toEqual("JavaScript")
  });
});
