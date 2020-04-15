import React from "react";
import Autocomplete from "./Autocomplete";

const languages = [
    {
      id: 1,
      label: "C",
      year: 1972
    },
    {
      id: 2,
      label: "C#",
      year: 2000
    },
    {
      id: 3,
      label: "C++",
      year: 1983
    },
    {
      id: 4,
      label: "Clojure",
      year: 2007
    },
    {
      id: 5,
      label: "Elm",
      year: 2012
    },
    {
      id: 6,
      label: "Go",
      year: 2009
    },
    {
      id: 7,
      label: "Haskell",
      year: 1990
    },
    {
      id: 8,
      label: "Java",
      year: 1995
    },
    {
      id: 9,
      label: "Javascript",
      year: 1995
    },
    {
      id: 10,
      label: "Perl",
      year: 1987
    },
    {
      id: 11,
      label: "PHP",
      year: 1995
    },
    {
      id: 12,
      label: "Python",
      year: 1991
    },
    {
      id: 13,
      label: "Ruby",
      year: 1995
    },
    {
      id: 14,
      label: "Scala",
      year: 2003
    }
  ];

export default { title: "Autocomplete" };

export const withLanguages = () => <Autocomplete options={languages}/>;