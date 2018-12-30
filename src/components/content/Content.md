The documentation for the content component.

```jsx
<Content>Some content</Content>
```

Our content blocks can have a header and a footer:

```jsx
const Header = <span>This is the header</span>;
const Footer = () => <div>Footer...</div>;

<Content header={Header} footer={<Footer />}>
  <div>This is more content</div>
  <div>This is still more content</div>
</Content>;
```

You can see the difference between passing a Component function and passing the
actual Component to the Content.

### StackPanel

The Content element can be used as a StackPanel, just like in the old WPF days.
The big difference is that for the Content Component we'll just have to pass the
`stack` attribute and this will proportionally size the content. This of course
will only work if you pass in some children to the component.

```jsx
const header = (
  <div style={{ background: "purple", color: "white" }}>The Header</div>
);
const footer = (
  <div style={{ background: "purple", color: "white" }}>The Footer</div>
);

<Content stack="1 4" header={header} footer={footer}>
  <div style={{ background: "pink" }}>This is more content</div>
  <div style={{ background: "orange" }}>This is still more content</div>
</Content>;
```

Columns:

```jsx
const header = (
  <div style={{ background: "purple", color: "white" }}>The Header</div>
);
const footer = (
  <div style={{ background: "purple", color: "white" }}>The Footer</div>
);

<Content
  stack="1 4"
  stackDirection="column"
  header={header}
  footer={footer}
  style={{ height: "300px" }}
>
  <div style={{ background: "pink" }}>This is more content</div>
  <div style={{ background: "orange" }}>This is still more content</div>
</Content>;
```
