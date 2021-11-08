import { extend } from "vee-validate";
import {
  required,
  email,
  max,
  min,
  digits,
  confirmed,
  alpha_spaces,
  alpha,
} from "vee-validate/dist/rules";

extend("musthaveleadingzero", (value) => {
  if (value.match(/^0[0-9].*$/)) {
    return true;
  }
  return "Invalid {_field_}";
});
extend("required", {
  ...required,
  message: "{_field_} is Required",
});
extend("email", email);
extend("max", {
  ...max,
  message: "Invalid {_field_}",
});
extend("min", {
  ...min,
  message: "Invalid {_field_}",
});
extend("digits", {
  ...digits,
  message: "Invalid {_field_}",
});
extend("confirmed", {
  ...confirmed,
  message: "Does not match Pin",
});
extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Invalid {_field_}",
});
extend("alpha", {
  ...alpha,
  message: "Invalid {_field_}",
});
