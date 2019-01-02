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
        let props = {
          value: state.model[field.name] || null,
          onChange: __onChange(onModelChanged, state, field.name),
          label: field.label || field.name,
          id: field.id
        };

        if (field.type === Number) {
          return <Field type="number" key={field.name} {...props} />;
        } else if (field.type === String) {
          return <Field type="text" key={field.name} {...props} />;
        } else {
          return <Field type="text" key={field.name} {...props} />;
        }
      })}
    </div>
  );

  return withState(component, formState);
};
