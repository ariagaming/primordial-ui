A TextBox should represent editable text.

```jsx
<TextBox />
```

You can combine this with the state management component to build powerful
stateful UIs based on a solid architecture:

```jsx
const { withState } = stateHelpers;

const Component = (props, { name, changeName }) => (
  <div>
    <span>Your name is: </span>
    <span>{name}</span>
    <TextBox label="Your name please:" value={name} onChange={changeName} />
  </div>
);
const state = {
  name: "Peter Pan",
  changeName: (name, state) => ({ ...state, name })
};

const ComponentWithState = withState(Component, state);

<ComponentWithState />;
```
