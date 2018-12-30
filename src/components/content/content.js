import React from "react";
import { buildStyle } from "./../styling";

/**
 * This is the content module. Content is something which we can place
 * on the page. Content is something which can contain other things.
 */

const classes = buildStyle({
  content: {
    composes: "content",
    display: "flex",
    flexDirection: "column"
  },
  content__header: {
    composes: "content__header"
  },
  content__footer: {
    composes: "content__footer"
  },
  content__body: {
    composes: "content__body",
    flex: "1"
  }
});

const SimpleContent = ({ children, header, footer, ...props }) => (
  <div className={classes.content} {...props}>
    {header ? <div className={classes.content__header}>{header}</div> : null}
    <div className={classes.content__body}>{children}</div>
    {footer ? <div className={classes.content__footer}>{footer}</div> : null}
  </div>
);

/**
 * A StackPanel
 * @param {*} param0
 */
const StackPanel = ({
  children,
  header,
  footer,
  stackDirection,
  stack,
  ...props
}) => {
  const stacks = stack.split(" ");
  const style = {
    display: "flex",
    flexDirection: stackDirection ? stackDirection : "row",
    justifyContent: "space-evenly"
  };

  return (
    <div className={classes.content} {...props}>
      {header ? <div className={classes.content__header}>{header}</div> : null}
      <div className={classes.content__body} style={style}>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            key: child.key || i,
            style: { ...child.props.style, flex: stacks[i] || null }
          });
        })}
      </div>
      {footer ? <div className={classes.content__footer}>{footer}</div> : null}
    </div>
  );
};

export const Content = props => {
  // We'll want some stackpanel behavior in our Content Components.
  // here we go....flexbox

  if (props.stack) {
    return <StackPanel {...props} />;
  } else {
    return <SimpleContent {...props} />;
  }
};
