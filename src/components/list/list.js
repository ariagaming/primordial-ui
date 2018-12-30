import React from "react";
import { buildStyle } from "./../styling";

/**
 * This is the content module. Content is something which we can place
 * on the page. Content is something which can contain other things.
 */

const classes = buildStyle({
  list: {
    composes: "list"
  },
  list__header: {
    composes: "list__header"
  },
  list__footer: {
    composes: "list__footer"
  },
  list__body: {
    composes: "list__body"
  }
});

export const List = ({ items, header, footer, ChildTemplate }) => {
  return (
    <div className={classes.list}>
      {header ? <div className={classes.list__header}>{header}</div> : null}
      {items.map((item, i) => {
        if (ChildTemplate)
          return <ChildTemplate key={item.id || item.key || i} item={item} />;
        else return <div key={item.id || item.key || i}>{item}</div>;
      })}
      {footer ? <div className={classes.list__footer}>{footer}</div> : null}
    </div>
  );
};
