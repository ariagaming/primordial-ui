/**
 * This file contains helper functions which can help you manage state in your
 * application. This is different than the Redux libraries.
 */

import React from "react";

const createState = (root, state) => {
  let _state = state;
  if (state instanceof Function) {
    _state = state(root.props);
  }

  return Object.entries(_state).reduce((acc, entry) => {
    const [key, value] = entry;
    if (value instanceof Function) {
      acc[key] = (...args) => {
        const newState = value.apply(null, [...args, root.state]);
        root.setState(newState);
      };
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
};

export const withState = (Component, state = {}) => {
  return class extends React.Component {
    state = createState(this, state);

    render() {
      const { props, state } = this;
      return Component(props, state);
    }
  };
};
