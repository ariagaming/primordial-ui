import * as FormTypes from "./formTypes";
import { ID } from "./../helpers";

export class Model {
  constructor(name, id) {
    this.__id = id || ID();
    this.name = name || this.__id;
    this.fields = new Map();
  }

  /**
   * Add a field to the model
   * @param {Field} field
   */
  addField(field) {
    if (field instanceof Field) {
      this.fields.set(field.name, field);
    } else {
      throw new Error(
        `[PUI - ERROR 003] Failed to add the field to the model ${
          this.name
        } because the
        field passed in is not of type "Field"`
      );
    }
  }

  /**
   * Remove a field from the model
   * @param {Field|string} field
   */
  removeField(field) {
    if (typeof field === "string") {
      this.fields.delete(field);
    } else {
      this.fields.delete(field.name);
    }
  }

  /**
   * Map over the fields of the model
   * @param {Function} handler
   */
  map(handler) {
    let r = [];
    for (let [key, value] of this.fields) {
      r.push(handler(value, key));
    }
    return r;
  }
}

/**
 * A field can be created by using a configuration or by passing in
 */
export class Field {
  id;
  name;
  /**
   * The type of the field is the backing "Model" which we provide for the field.
   * Models are the things which can be rendered and validated. Models are at the core
   * of this system and as such will be the main things rendered.
   */
  type;
  constructor(model, config, name) {
    this.id = config.id || model.__id + "__" + name;
    if (!name && !config.name) {
      throw new Error(
        `[PUI - ERROR 001] Failed to create a field, no name specified.`
      );
    }

    if (config instanceof Model) {
      // the field is a model, this means we've passed in a Model object, indicating
      // that the field is a complete sub-type.
      this.type = config;
      this.name = config.name;
    } else if (typeof config === "string") {
      // We can pass in "just the name" of the field we'll want to create
      // this will result in a simple Field type.
      this.type = String;
      this.name = config;
      this.required = false;
    } else if (typeof config === "function") {
      if (!name) {
        throw new Error(
          `[PUI - ERROR 002] Failed to create a field, no name specified.`
        );
      }

      this.type = config;
      this.name = name;
      this.required = true;
    }
  }

  /**
   * Get a value from the object.
   * @param {string} key
   */
  getValue(key) {
    return this[key];
  }

  /**
   * Set the value of a property on the field
   * @param {string} key
   * @param {any} newValue
   */
  setValue(key, newValue) {
    this[key] = newValue;
  }

  /**
   * Clone the field.
   */
  clone() {
    return new Field(this);
  }
}

/**
 *
 * @param {Model Configuration} config
 * @param {string} name
 */
export const createModel = (config, name, id) => {
  /*
  The config object should always look like
  {
    name: "a name",
    id: "a unique id",
    fields: {
      // some field configuration
    }
  }

  because this is not walways the case we'll want to manually reshape the
  config object to look like what we want to have.
  */

  // if we just supply an object of props we'll correct the object.
  if (!config.fields) {
    const __id = ID();
    config = {
      name: name || __id,
      id: id || (name || __id) + "__id" || __id,
      fields: config || {}
    };
  }

  if (!config.name)
    throw new Error("[PUI - ERROR 004] - A model should always have a name");

  const model = new Model(config.name, config.id);
  model.title = config.title;
  model.component = config.component;

  Object.keys(config.fields).forEach(key => {
    const field = config.fields[key];
    if (field instanceof Model) {
      field.setValue("name", key);
      model.addField(field);
    } else if (field.type === Array && field.ofType) {
      model.addField(new Field(model, field, key));
    } else {
      const _field = new Field(model, field, key);
      model.addField(_field);
    }
  });

  return model;
};
