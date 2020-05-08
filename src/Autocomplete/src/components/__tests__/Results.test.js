import React from "react";
import { render } from "enzyme";
import Results from "../Results";

const handleClickItem = () => {
};

const changeActiveOption = () => {
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
  let component;
  beforeAll(() => {
    component = render(
      <Results
        showResults={true}
        results={languages}
        activeOption={1}
        handleClickItem={handleClickItem}
        changeActiveOption={changeActiveOption}
      />
    );
  });
  test("snapshot renders", () => {
    let tree = component.html();
    expect(tree).toMatchSnapshot();
  });

  it("renders wrapper and all list options", () => {
    // tests wrapper class
    expect(component.find('Results-boxResultsWrapper-0-2-2')).toBeDefined();
    expect(component.children()).toHaveLength(languages.length);
  });
});
