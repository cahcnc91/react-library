import React from "react";
import { mount } from "enzyme";
import Input from "../Input";

const toggleShowResults = () => {};
const onKeyDown = () => {};
const onChange = () => {};

describe("Input", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <Input
        showResults={true}
        searchString={"Java"}
        toggleShowResults={toggleShowResults}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    );
  });

  test("snapshot renders", () => {
    let tree = wrapper.html();
    expect(tree).toMatchSnapshot();
  });

  it("renders input, input value and class", () => {
    expect(wrapper.find('input[type="text"]').props().value).toEqual("Java");
    expect(wrapper.find('input[type="text"]').props().className).toEqual("Input-input-0-2-7");
  });
});
