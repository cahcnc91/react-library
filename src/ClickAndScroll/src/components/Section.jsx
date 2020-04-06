// This is the main component for the Building class Modal
import React, { Fragment } from "react";
import withStyles from "react-jss";
import WithSectionsProps from './WithSectionsProps';

// The styles for the component
const styles = {
  title: {
    fontWeight: 500,
    paddingBottom: "1rem",
    fontFamily: "Lucida Console, Courier, monospace",
  },
  p: {
    color: "#7B8898",
    fontSize: "1rem",
    fontFamily: "Mercury SSm A",
    paddingBottom: "3rem",
    lineHeight: '1.5rem'
  }
};

const Section = ({ section, i, sections, classes }) => {
  return (
    <Fragment>

          <h2 className={classes.title}>
            {section.title}
          </h2>
          <WithSectionsProps {...section}/>
          {i === sections.length - 1 && <div style={{ height: "300px" }} />}
    </Fragment>
  );
};

export default withStyles(styles)(Section);
