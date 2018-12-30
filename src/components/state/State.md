Managing state.

Decoupling state from the component is a very valuable thing to do. I personally
do this because I really like to Unit Test my state and the functions which
change the state.

The reason I pass the state as a second parameter to a render function is
because I really like "splitting" those things up. Your state is _not_ your
component. Your component does _not_ have your state as a bag of properties
passed into it. Your state is something which lives apart from the component,
something which can be reused.

These simple guidelines led me to implement state management differently from
what the Facebook architecture for state management is.

```jsx
const { withState } = stateHelpers;

const Component = (props, { index, increase }) => (
  <div onClick={increase} {...props}>
    Click me to increase: {index}
  </div>
);
const state = {
  index: 0,
  increase: (event, state) => ({ ...state, index: state.index + 1 })
};

const ComponentWithState = withState(Component, state);

<ComponentWithState />;
```
