import { Content } from "./content/content";
import { TextBox } from "./field-text/textBox";
import { NumberBox } from "./field-number/numberBox";

/*
 * Create a class per component so that we can add
 * these components to the WeakMap and easilly
 * set and reset the components.
 */
export class PuiContent {}
export class PuiTextBox {}
export class PuiNumberBox {}

/*
 * Add the primordial components to the WeakMap
 */

const componentMap = new WeakMap();

export const reset = () => {
  componentMap.set(PuiContent, Content);
  componentMap.set(PuiTextBox, TextBox);
  componentMap.set(PuiNumberBox, NumberBox);
};

reset();

export const ComponentMap = componentMap;
