Oozing out of the Primordial soup is a simple but elegant way of describing your
forms and your data. This notation and the way we can provide the configuration
is both powerful and really expressive.

An Ooze is a typed data structure. You can do little things with Oozes, for
example, you can render a field from an Ooze or validate an Object by an Ooze.

```jsx
const { withState } = stateHelpers;
const { createModel } = ooze;
const { createForm } = require("./formBuilder");

const config = {
  name: String,
  age: Number
};

const model = createModel(config);
const Form = createForm(model, m => console.log(m));

const state = {
  m: {},
  onChange: (m, state) => ({ ...state, m })
};

const Component = withState(
  (props, s) => (
    <div>
      <pre>{JSON.stringify(s.m, null, 4)}</pre>
      <Form onModelChanged={s.onChange} />
    </div>
  ),
  state
);

<Component />;
```

We can expand on the configuration:

```jsx
const { withState } = stateHelpers;
const { createModel } = ooze;
const { createForm } = require("./formBuilder");
const config = {
  name: String,
  age: {
    type: Number,
    label: "Ageee"
  }
};
const model = createModel(config);
const Form = createForm(model, m => console.log(m));
<Form />;
```
