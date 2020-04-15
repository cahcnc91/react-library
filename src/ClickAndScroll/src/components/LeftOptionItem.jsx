import React from "react";
import injectSheet from "react-jss";

const stylesT = {
  text: (props) => ({
    color: props.backgroundColor,
    fontFamily: "'Lucida Console', Courier, monospace;",
    opacity: 1,
  })
};

const stylesS = {
  listItem: (props) => ({
    "&:hover": {
      // todo: use pallete colors
      backgroundColor: props.color
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "1.5rem 0",
  }),
  selectedItem: (props) => ({
    // todo: use palette colors
    backgroundColor: props.color,
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

ListItem.defaultProps = {
  color:  "#B7E2AB "
};
const StyledListItem = injectSheet(stylesS)(ListItem);

Title.defaultProps = {
  backgroundColor: "#55c57a"
}
const StyledTitle = injectSheet(stylesT)(Title);

const LeftOptionItem = (props) => {
  const handleClick = () => {
    props.handleClickSection(true);
    props.handleChangeActiveSection(props.itemIndex);
  };
  console.log(props)
  return (
    <StyledListItem {...props} handleClick={handleClick}/>
  );
};

export default LeftOptionItem;
