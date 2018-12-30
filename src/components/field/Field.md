Adding a field to an application is usually difficult to do. In Primordial UI
adding a field is a breeze!

```jsx
<Field type="text" />
```

You can change the implementation of the TextBox to anything you like. For
example:

```jsx
const { ComponentMap, reset, PuiTextBox } = require("./../components");

const ReplacementComponent = ({ value, onChange, label, ...props }) => (
  <div>
    <p>A sample of an alternate template:</p>
    <label style={{ color: "orange" }}>{label}</label>
    <br />
    <input value onChange {...props} />
  </div>
);

const oldPuiTextBox = ComponentMap.get(PuiTextBox);
ComponentMap.set(PuiTextBox, ReplacementComponent);

setTimeout(reset, 0);

<Field type="text" value="Capt. Hook" onChange={e => alert(e.target.value)} />;
```

```jsx noeditor
// We'll have to cleanup the previous example. This code does so,
// please do not remove!
const { reset } = require("./../components");
reset();
null;
```
