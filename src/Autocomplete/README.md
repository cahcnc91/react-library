# Autocomplete Component

## Installation

Run npm install --save cahcnc91-autocomplete

## Usage

Provide a options array, each item should be an object with a label property.

```jsx
import React, { Component } from "react";
import Autocomplete from "cahcnc91-autocomplete";

const languages = [
    {
      id: 1,
      label: "C"
    },
    {
      id: 2,
      label: "C#"
    },
    {
        id: 3,
        label: "JavaScript"
    }
  ];

class Example extends Component {
  render() {
    return (
      <Autocomplete options={languages}/>
    );
  }
}
```
