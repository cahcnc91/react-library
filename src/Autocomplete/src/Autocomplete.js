import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Input from "./components/Input";
import Results from "./components/Results";

const useStyles = createUseStyles({
  paper: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  },
  paperWithResults: {
    position: "relative",
    boxShadow: "0px 0px 0px -1px rgba(0,0,0,0.2), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)",
    borderRadius: "8px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
});

export default function Autocomplete({ options }) {
  const searchBar = useRef();
  // If user clicks outside searchbar and results, it closes showResults
  const handleClickOutside = e => {
    if (
      searchBar.current &&
      !searchBar.current.contains(e.target) &&
      showResults
    ) {
      toggleShowResults(false);
      changeActiveOption(-1);
    }
  };
  // event listener if clicks out of saearch bar, it hides results(showResults = false)
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const classes = useStyles();
  const [searchString, updateSearchString] = useState("");
  const [activeOption, changeActiveOption] = useState(-1);
  const [showResults, toggleShowResults] = useState(false);
  const [results, changeResults] = useState(options);

  const filterResults = v => {
    updateSearchString(v);
    if (v === "") {
      changeResults(options);
      return changeActiveOption(-1);
    }
    if (!showResults) {
      toggleShowResults(true);
    }
    const newResults = results.filter(r =>
      r.label.toLowerCase().includes(v.toLowerCase())
    );
    changeResults(newResults);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      const item = results[activeOption];
      toggleShowResults(false);
      filterResults(item.label);
      updateSearchString(item.label);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      changeActiveOption(activeOption - 1);
    } else if (e.keyCode === 40) {
      if (activeOption === results.length - 1) {
        return;
      }
      changeActiveOption(activeOption + 1);
    }
  };

  const handleClickItem = item => {
    toggleShowResults(false);
    updateSearchString(item.label);
    filterResults(item.label);
  };

  return (
    <div
      ref={searchBar}
      className={showResults ? classes.paperWithResults : classes.paper}
    >
      <Input
        searchString={searchString}
        filterResults={filterResults}
        toggleShowResults={toggleShowResults}
        showResults={showResults}
        onKeyDown={onKeyDown}
      />
      <Results
        results={results}
        showResults={showResults}
        activeOption={activeOption}
        changeActiveOption={changeActiveOption}
        handleClickItem={handleClickItem}
      />
    </div>
  );
}
