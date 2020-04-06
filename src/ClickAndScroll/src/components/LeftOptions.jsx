import React from "react";
import withStyles from "react-jss";
import LeftOptionItem from "./LeftOptionItem";

const styles = {
  list: {
    height: '100%',
    width: "25%",
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    "@media (max-width: 700px)": {
      width: "40%"
    },
    "@media (max-width: 350px)": {
      display: "none"
    }
  }
}

const LeftOptions = ({
  activeSection,
  handleChangeActiveSection,
  handleClickSection,
  sections,
  classes
}) => {

  return (
    <div className={classes.list}>
      {sections.map((item, index) => (
        <LeftOptionItem
          key={index}
          activeSection={activeSection}
          itemIndex={index}
          item={item.title}
          handleChangeActiveSection={handleChangeActiveSection}
          handleClickSection={handleClickSection}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(LeftOptions);
