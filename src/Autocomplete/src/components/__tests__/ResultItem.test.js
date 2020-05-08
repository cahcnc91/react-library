import React from "react";
import { shallow } from "enzyme";
import ResultItem from "../ResultItem";

const handleClickItem = () => {};

const changeActiveOption = () => {};

const item = { label: "JavaScript", id: 1 };
describe("ResultItem", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <ResultItem
        item={item}
        index={0}
        activeOption={1}
        handleClickItem={handleClickItem}
        changeActiveOption={changeActiveOption}
      />
    );
  });

  test("snapshot renders", () => {
    let tree = wrapper.html();
    expect(tree).toMatchSnapshot();
  });

  it("renders the inner text", () => {
    expect(wrapper.text()).toEqual("JavaScript");
    expect(wrapper.find(`[data-test='result-item-1']`))
  });
});
