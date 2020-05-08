import React from "react";
import withStyles from "react-jss";
import Input from "./components/Input";
import Results from "./components/Results";

const styles = {
  paper: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  paperWithResults: {
    position: "relative",
    boxShadow:
      "0px 0px 0px -1px rgba(0,0,0,0.2), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)",
    borderRadius: "8px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
};

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.searchbar = React.createRef();
    this.state = {
      searchString: "",
      activeOption: -1,
      showResults: false,
      results: this.props.options,
    };
    this.toggleShowResults = this.toggleShowResults.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.changeActiveOption = this.changeActiveOption.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // event listener if clicks out of saearch bar, it hides results(showResults = false)
  componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
  }

  // remove event listener
  componentWillMount() {
      document.removeEventListener(
        "mousedown",
        this.handleClickOutside
      );
  }

    // If user clicks outside searchbar and results, it closes showResults
    handleClickOutside(e) {
      if (
        this.searchbar.current &&
        !this.searchbar.current.contains(e.target) &&
        this.state.showResults
      ) {
        this.setState({ showResults: false, activeOption: -1 });
      }
    }

  filterResults(v) {
    if (v === "") {
      this.setState({ searchString: v, results: this.props.options, activeOption: -1 });
      return;
    }
    if (!this.state.showResults) {
      this.setState({ showResults: true });
    }
    const newResults = this.state.results.filter((r) =>
      r.label.toLowerCase().includes(v.toLowerCase())
    );
    this.setState({ results: newResults, searchString: v });
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      const item = this.state.results[this.state.activeOption];
      this.setState({
        showResults: false,
        searchString: item.label,
      });
      this.filterResults(item.label);
    } else if (e.keyCode === 38) {
      if (this.state.activeOption === 0) {
        return;
      }
      this.setState({ activeOption: this.state.activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (this.state.activeOption === this.state.results.length - 1) {
        return;
      }
      this.setState({ activeOption: this.state.activeOption + 1 });
    }
  }

  handleClickItem(item) {
    this.setState({
      showResults: false,
      searchString: item.label,
    });
    this.filterResults(item.label);
  }

  toggleShowResults() {
    this.setState({ showResults: !this.state.showResults });
  }

  changeActiveOption(op) {
    this.setState({ activeOption: op });
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        ref={this.searchbar}
        className={
          this.state.showResults ? classes.paperWithResults : classes.paper
        }
      >
        <Input
          searchString={this.state.searchString}
          filterResults={this.filterResults}
          toggleShowResults={this.toggleShowResults}
          showResults={this.state.showResults}
          onKeyDown={this.onKeyDown}
        />
        <Results
          results={this.state.results}
          showResults={this.state.showResults}
          activeOption={this.state.activeOption}
          changeActiveOption={this.changeActiveOption}
          handleClickItem={this.handleClickItem}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Autocomplete);
