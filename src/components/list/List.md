The list control is a simple control which you can use to render a list to the
screen.

```jsx
const items = ["Peter Pan", "Wendy", "Cpt. Hook", "Mr. Smee"];

<List items={items} />;
```

You can add a template to the item:

```jsx
const { buildStyle } = require("./../styling");
const classes = buildStyle({
  template: {
    background: "pink",
    "border-bottom": "1px solid maroon",
    "&:first-child": {
      "border-top": "1px solid maroon"
    },
    "&:hover": {
      background: "green",
      color: "white"
    }
  }
});

const items = ["Peter Pan", "Wendy", "Cpt. Hook", "Mr. Smee"];
const Template = ({ item }) => (
  <div className={classes.template}>The value: {item}</div>
);
<List items={items} ChildTemplate={Template} />;
```
