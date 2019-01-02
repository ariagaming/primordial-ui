import React from "react";
import { ComponentMap, PuiTextBox, PuiNumberBox } from "./../components";

export const Field = ({ type, ...props }) => {
  const id = (props.id || props.name) + "__id";
  switch (type) {
    case "text":
      const TextBoxComponent = ComponentMap.get(PuiTextBox);
      return <TextBoxComponent id={id} {...props} />;
    case "number":
      const NumberBoxComponent = ComponentMap.get(PuiNumberBox);
      return <NumberBoxComponent id={id} {...props} />;
    default:
      return <div>Field</div>;
  }
};
