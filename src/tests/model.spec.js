import React from "react";
import { Model, Field, createModel } from "../utils/ooze";
import { createForm } from "../utils/formBuilder";
import renderer from "react-test-renderer";

const config = {
  name: String,
  age: Number
};

it("Should be able to create a Model", () => {
  const model = createModel(config);
  expect(model).toBeDefined();

  const nameField = model.fields.get("name");
  expect(nameField).toBeDefined();
  expect(nameField.name).toEqual("name");
  expect(nameField.type).toEqual(String);

  const ageField = model.fields.get("age");
  expect(ageField).toBeDefined();
  expect(ageField.name).toEqual("age");
  expect(ageField.type).toEqual(Number);
});

it("Should be able to generate a UI", () => {
  const model = createModel(config, "person");
  const Form = createForm(model);
  const component = renderer.create(<Form />);

  // test it to the snapshot, must always remain the same
  expect(component.toTree()).toMatchSnapshot();
});

it("We should be able to render a change", () => {
  const model = createModel(config, "person");
  const Form = createForm(model);
  const component = renderer.create(<Form />);
});
