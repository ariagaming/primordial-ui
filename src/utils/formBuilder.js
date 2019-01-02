import React from "react";
import { Model } from "./ooze";
import { Field } from "./../components/field/field";
import { withState } from "./../components/state/state";

const formState = {
  model: {},
  onFormModelChanged: (model, state) => ({ ...state, model })
};

/**
 * Generate a form
 * @param {Model} model
 */
export const createForm = model => {
  const __onChange = (onModelChanged, state, key) => value => {
    const newModel = { ...state.model, [key]: value };
    if (onModelChanged) onModelChanged(newModel);
    state.onFormModelChanged(newModel);
  };
  const component = ({ onModelChanged }, state) => (
    <div>
      {model.map(field => {
        if (field.type === Number) {
          return (
            <Field
              key={field.name}
              type="number"
              value={state.model[field.name] || 0}
              onChange={__onChange(onModelChanged, state, field.name)}
              label={field.name}
              id={field.id}
            />
          );
        } else {
          return (
            <Field
              key={field.name}
              type="text"
              value={state.model[field.name] || ""}
              onChange={__onChange(onModelChanged, state, field.name)}
              label={field.name}
              id={field.id}
            />
          );
        }
      })}
    </div>
  );

  return withState(component, formState);
};
