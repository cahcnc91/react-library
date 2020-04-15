import React from "react";
import withStyles from "react-jss";

const styles = {
  nonSelected: {
    cursor: "pointer",
    display: "flex",
    padding: ".5rem 1.1rem"
  },
  selected: {
    cursor: "pointer",
    display: "flex",
    padding: ".5rem 1.1rem",
    backgroundColor: "rgba(0, 0, 0, .06)"
  },
  text: {
    fontFamily: 'Helvetica, sans-serif',
  },
};

/** displays search items in search drop down */
const ResultItem = ({
  item,
  index,
  activeOption,
  changeActiveOption,
  handleClickItem,
  classes
}) => {

  return (
    <div
      className={
        activeOption === index ? classes.selected : classes.nonSelected
      }
      onClick={() => handleClickItem(item)}
      onMouseOver={() => changeActiveOption(index)}
    >
      {item.label}
    </div>
  );
};

export default withStyles(styles)(ResultItem);
