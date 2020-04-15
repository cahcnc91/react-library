import React from "react";
import injectSheet from "react-jss";

const stylesT = {
  text: (props) => ({
    color: props.style.backgroundColor,
    fontFamily: "'Lucida Console', Courier, monospace;",
    opacity: 1,
  })
};

const stylesS = {
  listItem: (props) => ({
    "&:hover": {
      // todo: use pallete colors
      backgroundColor: props.style.color
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "1.5rem 0",
  }),
  selectedItem: (props) => ({
    // todo: use palette colors
    backgroundColor: props.style.color,
    color: "#28b485",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "1.5rem 0",
  }),
};

const ListItem = (props) => (
  <div
    className={
      props.itemIndex === props.activeSection
        ? props.classes.selectedItem
        : props.classes.listItem
    }
    onClick={() => props.handleClick()}
  >
    <StyledTitle {...props}>{props.item}</StyledTitle>
  </div>
);

const Title = (props) => (
  <h3 className={props.classes.text}>{props.children}</h3>
);

const StyledListItem = injectSheet(stylesS)(ListItem);

const StyledTitle = injectSheet(stylesT)(Title);

const LeftOptionItem = (props) => {
  const handleClick = () => {
    props.handleClickSection(true);
    props.handleChangeActiveSection(props.itemIndex);
  };
  return (
    <StyledListItem {...props} handleClick={handleClick}/>
  );
};

export default LeftOptionItem;
