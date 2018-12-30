import React from "react";
import { ComponentMap, PuiTextBox } from "./../components";

export const Field = ({ type, ...props }) => {
  switch (type) {
    case "text":
      const TextBoxComponent = ComponentMap.get(PuiTextBox);
      return <TextBoxComponent {...props} />;
    default:
      return <div>Field</div>;
  }
};
