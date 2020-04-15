import React from 'react';
import { createUseStyles } from "react-jss";
import ResultItem from './ResultItem';

const useStyles = createUseStyles({
  fullHistory: {
    cursor: 'pointer',
    padding: '.5rem 1.1rem',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .06)'
    }
  },
  boxResultsWrapper: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    padding: '.5rem 0',
    borderRadius: 5,
    borderTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  },
  noResults: {
    padding: ".3rem 1.1rem",
    fontFamily: 'Helvetica, sans-serif'
  }
});

const Results = ({
  showResults,
  results,
  activeOption,
  changeActiveOption,
  handleClickItem
}) => {
  const classes = useStyles();

  return (
    <div className={showResults ? classes.boxResultsWrapper : ''}>
      {showResults && results.length > 0 &&
        results.map((item, index) => (
            <ResultItem
              key={`${item.id}`}
              item={item}
              handleClickItem={handleClickItem}
              changeActiveOption={changeActiveOption}
              index={index}
              activeOption={activeOption}
            />
        ))}
        {showResults && results.length === 0 &&
        <div className={classes.noResults}> No Results found </div>
        }
    </div>
  );
};

export default Results;
