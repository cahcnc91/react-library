# Click and Scroll Component


## Installation

Run npm install --save cahcnc91-click-scroll

## Usage

```jsx
import React, { Component } from 'react'
import ClickAndScroll from "cahcnc91-click-scroll";

const Content = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );
};

class Example extends Component {
  render() {
    return <ClickAndScroll sections={[
          {
            title: "TEST 1",
            component: Content
          },
          {
            title: "Test 2",
            component: Content
          },
          {
            title: "TEST 3",
            component: Content
          },
                    {
            title: "TEST 4",
            component: Content
          }
        ]}/>
  }
}
```

For overwriting default colors, provide color and backgroundColor.

```jsx

const styles = {
  color: '#b0e0e6',
  backgroundColor: '#009bce',
}

<ClickAndScroll
  {...styles}
  sections={[
    {
      title: "TEST 1",
      component: Content,
    },
    {
      title: "Test 2",
      component: Content,
    },
  ]}
/>
```

