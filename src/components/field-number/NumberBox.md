A TextBox should represent editable text.

```jsx
<NumberBox />
```

Again, you can combine the NumberBox type with the primordial state manager and
get beautiful and responsive UIs!

```jsx
const { withState } = stateHelpers;

const Component = (props, { name, age, changeAge }) => (
  <div>
    <div>
      <span>Your name is: </span>
      <span>{name}</span>
    </div>
    <div>
      <span>Your age is: </span>
      <span>{age}</span>
    </div>
    <NumberBox label="Your new age please:" value={age} onChange={changeAge} />
  </div>
);
const state = {
  name: "Peter Pan",
  age: 12,
  changeAge: (age, state) => ({ ...state, age })
};

const ComponentWithState = withState(Component, state);

<ComponentWithState />;
```
