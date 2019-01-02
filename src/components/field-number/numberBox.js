import React from "react";
import { ID } from "./../../helpers";

const dummyOnchange = () => {};

export const NumberBox = ({ id, label = "empty", value, onChange }) => {
  const __id = id || ID();
  if (value === undefined) {
    /*
    Because the value is undefined we will assume that the control is
    meant to be used in an "uncontrolled" fashion. This means that we won't
    even attach the "onChange" event listener to the control.
    */
    if (onChange) {
      console.warn(
        `You are passing an 'onChange' handler to an uncontrolled input.
        The listener will not be attached. If this is not waht you want,
        consider passing in a vlaue for the control to bind to.`
      );
    }
    return (
      <div className="field field__textbox">
        <label htmlFor={__id}>{label}</label>
        <input id={__id} type="number" />
      </div>
    );
  } else {
    return (
      <div className="field field__textbox">
        <label htmlFor={__id}>{label}</label>
        <input
          id={__id}
          onChange={e => onChange(e.target.value ? +e.target.value : null)}
          value={value}
          type="number"
        />
      </div>
    );
  }
};
