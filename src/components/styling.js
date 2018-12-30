import { create } from "jss";
import preset from "jss-preset-default";

export const jss = create(preset());

export const buildStyle = style => {
  const sheet = jss.createStyleSheet(style);
  sheet.attach();
  return sheet.classes;
};
