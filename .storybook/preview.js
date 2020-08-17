import { defineCustomElements } from "../dist/esm/loader";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

defineCustomElements();
