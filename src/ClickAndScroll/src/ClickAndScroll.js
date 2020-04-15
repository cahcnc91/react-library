import React from "react";
import withStyles from "react-jss";
import LeftOptions from "./components/LeftOptions";
import Section from "./components/Section";

const styles = {
  wrapper: {
    overflow: "hidden",
    backgroundColor: "white",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  sectionsWrap: {
    overflowY: "scroll",
    width: "75%",
    padding: "2rem 3rem 2rem 3rem",
    position: "relative",

    "@media (max-width: 700px)": {
      width: "60%",
    },
    "@media (max-width: 350px)": {
      width: "100%",
    },
  },
  boxBlue: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#55c57a",
  },
  title: {
    color: "#fff",
    fontFamily: "'Lucida Console', Courier, monospace",
  },
  leftWrapper: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
  },
};

class ClickAndScroll extends React.Component {
  constructor(props) {
    super(props);

    this.filtersWrap = React.createRef();
    this.elementsRef = [];
    this.state = {
      activeSection: 0,
      clickedSection: false,
    };
    this.handleClickSection = this.handleClickSection.bind(this);
    this.handleChangeActiveSection = this.handleChangeActiveSection.bind(this);
    this.handleChangeActive = this.handleChangeActive.bind(this);
  }

  //add event listener
  componentDidMount() {
    this.filtersWrap.current.addEventListener(
      "scroll",
      this.handleChangeActive
    );
  }

  // remove event listener
  componentWillMount() {
    if (this.filtersWrap.current) {
      this.filtersWrap.current.removeEventListener(
        "scroll",
        this.handleChangeActive
      );
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.clickedSection !== prevState.clickedSection) {
      if (this.state.clickedSection) {
        if (this.filtersWrap.current) {
          this.filtersWrap.current.removeEventListener(
            "scroll",
            this.handleChangeActive
          );
        }

        if (this.elementsRef[this.state.activeSection] !== null) {
          this.elementsRef[this.state.activeSection].scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }

        if (this.filtersWrap.current) {
          this.filtersWrap.current.addEventListener(
            "scroll",
            this.handleChangeActive
          );
        }

        this.handleClickSection(false);
      }
    }
  }

  handleChangeActiveSection(sec) {
    this.setState({ activeSection: sec });
  }

  handleClickSection(bool) {
    this.setState({ clickedSection: bool });
  }

  /** Function will change the active section onScrolling */
  handleChangeActive() {
    const { sections } = this.props
    const scrollDistance =
      this.filtersWrap &&
      this.filtersWrap.current &&
      this.filtersWrap.current.scrollTop
        ? this.filtersWrap.current.scrollTop
        : 0;
    let index = 0;
    let condition = false;
    let i = 0;

    while (!condition && i <= sections.length - 1) {
      const som =
        this.elementsRef[i].offsetTop + this.elementsRef[i].offsetHeight;

      if (som && scrollDistance < som && !condition) {
        index = i;
        condition = true;
      }
      i++;
    }
    this.handleChangeActiveSection(index);
  }

  // hook to scroll to section when click section on sidebar

  render() {
    const { classes, sections } = this.props;
    console.log(this.props.styles)

    return (
      <div className={classes.wrapper}>
        <div className={{...classes.boxBlue, ...this.props.styles}}>
          <h1 className={classes.title}>Scroll & Click</h1>
        </div>
        <div className={classes.leftWrapper}>
          <LeftOptions
            activeSection={this.state.activeSection}
            handleChangeActiveSection={this.handleChangeActiveSection}
            handleClickSection={this.handleClickSection}
            sections={sections}
          />
          <div ref={this.filtersWrap} className={classes.sectionsWrap}>
            {sections.map((section, i) => (
              <div
                key={i}
                ref={(ref) => this.elementsRef[i] = ref}
              >
                <Section i={i} section={section} sections={sections} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ClickAndScroll);
