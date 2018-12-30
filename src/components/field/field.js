import React from "react";
import { ComponentMap, PuiTextBox, PuiNumberBox } from "./../components";

export const Field = ({ type, ...props }) => {
  switch (type) {
    case "text":
      const TextBoxComponent = ComponentMap.get(PuiTextBox);
      return <TextBoxComponent {...props} />;
    case "number":
      const NumberBoxComponent = ComponentMap.get(PuiNumberBox);
      return <NumberBoxComponent {...props} />;
    default:
      return <div>Field</div>;
  }
};
