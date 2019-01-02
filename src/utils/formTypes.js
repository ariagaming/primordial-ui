/* We'll need a few form types if we'll want to render out our models */

class FormType {}
export class Password extends FormType {}
export class Email extends FormType {}
export class MultiLine extends FormType {}
export class DatePicker extends FormType {}
export class DateTimePicker extends FormType {}
export class Slider extends FormType {}

// Number and String are implicit, because they are already JavaScript Objects

export const emailRegexTester = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
