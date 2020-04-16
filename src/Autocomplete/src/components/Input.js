import React from "react";
import withStyles from "react-jss";
import SearchIcon from "../assets/search.svg";
import CloseIcon from '../assets/close.svg';

const styles = {
  showResultsBottom: {
    width: "100%",
    padding: "0.1rem",
    borderBottom: "1px solid #ced4da",
    boxShadow: "none",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: "100%",
  },
  noShowResults: {
    width: "100%",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    backgroundColor: "#AEAEAE",
    width: "1px",
    height: "1.5rem",
  },
  icon: {
    margin: "0 10px",
    height: "1rem",
    width: '1rem',
    cursor: "pointer",
  },
  iconClear: {
    margin: "0 15px",
    height: ".8rem",
    width: '.8rem',
    cursor: "pointer",
  },
  input: {
    width: "calc(100% - 45px)",
    border: "none",
    borderRadius: "8px",
    padding: ".8rem 0 .8rem .7rem",
    fontSize: ".9rem",
    "&:focus": {
      outline: "none",
    },
    "&:placeholder": {
      fontSize: "1.0rem",
    },
  },
  flexRow1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

/** universal-search-bar-input */
const Input = ({
  showResults,
  searchString,
  toggleShowResults,
  onKeyDown,
  filterResults,
  classes,
}) => {
  return (
    <div
      className={
        showResults ? classes.showResultsBottom : classes.noShowResults
      }
    >
      <div className={classes.flexRow}>
        <input
          id="searchBarInput"
          value={searchString}
          type="text"
          autoComplete="off"
          placeholder={"Search for..."}
          onChange={(e) => filterResults(e.target.value)}
          className={classes.input}
          onClick={toggleShowResults}
          onKeyDown={onKeyDown}
        />
        <div className={classes.flexRow1}>
          <div className={classes.divider} />
          {searchString === "" ? (
            <img src={SearchIcon} className={classes.icon} onClick={toggleShowResults}/>
          ) : (
          <img src={CloseIcon} className={classes.iconClear} onClick={() => filterResults("")}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Input);
