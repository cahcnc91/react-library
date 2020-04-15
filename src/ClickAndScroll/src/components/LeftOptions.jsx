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

const LeftOptions = (props) => {

  return (
    <div className={props.classes.list}>
      {props.sections.map((item, index) => (
        <LeftOptionItem
          key={index}
          itemIndex={index}
          item={item.title}
         {...props}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(LeftOptions);
