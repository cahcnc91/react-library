import React from "react";
import renderer from "react-test-renderer";
import { render, shallow } from "enzyme";
import Results from "../Results";
import ResultItem from "../ResultItem";

const handleClickItem = () => {
  console.log("test");
};

const changeActiveOption = () => {
  console.group("test1");
};

const languages = [
    {
      id: 1,
      label: "C",
      year: 1972
    },
    {
      id: 2,
      label: "C#",
      year: 2000
    },
    {
      id: 3,
      label: "C++",
      year: 1983
    },
    {
      id: 4,
      label: "Clojure",
      year: 2007
    }
  ];

describe("Results", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <Results
        showResults={true}
        results={languages}
        activeOption={1}
        handleClickItem={handleClickItem}
        changeActiveOption={changeActiveOption}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders wrapper and all list options", () => {
    const wrapper = render(
      <Results
        showResults={true}
        results={languages}
        activeOption={1}
        handleClickItem={handleClickItem}
        changeActiveOption={changeActiveOption}
      />
    );

    // tests wrapper class
    expect(wrapper.find('Results-boxResultsWrapper-0-2-2')).toBeDefined();
    expect(wrapper.children()).toHaveLength(languages.length);
  });
});
