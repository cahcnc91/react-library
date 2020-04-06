import React from "react";
import withStyles from "react-jss";

const styles = {
  listItem: {
    "&:hover": {
      // todo: use pallete colors
      backgroundColor: "#a5d6a7"
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: '1.5rem 0'
  },
  selectedItem: {
    // todo: use palette colors
    backgroundColor: "#a5d6a7",
    color: "#28b485",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: '1.5rem 0'
  },
  text: {
    color: "#28b485",
    fontFamily: "'Lucida Console', Courier, monospace;"
  }
};

const LeftOptionItem = ({
  item,
  itemIndex,
  activeSection,
  handleChangeActiveSection,
  handleClickSection,
  classes
}) => {

  const handleClick = (index) => {
    handleClickSection(true);
    handleChangeActiveSection(index);
  };
  return (
    <div
      className={
        itemIndex === activeSection ? classes.selectedItem : classes.listItem
      }
      onClick={() => handleClick(itemIndex)}
    >
      <h3 className={classes.text}>{item}</h3>
    </div>
  );
};

export default withStyles(styles)(LeftOptionItem);
