import { Logger } from "../../services";

export default {
  title: "Components/My Component",
};

export const Default = () => `
    <my-component first="John" middle="R" last="Smith"></my-component>
`;

interface TestLogger extends Logger {
  type: string;
}

export const WithMockService = () => {
  const testRoot = document.createElement("div");

  // component instance 1 uses custom logger.
  const c1 = document.createElement("my-component");
  c1.first = "John";
  c1.last = "Smith";
  const testLogger: TestLogger = {
    type: "testlogger",
    log(message: string) {
      console.log("FAKE-LOGGER", message);
    },
  };
  c1.logger = testLogger;
  testRoot.appendChild(c1);

  // component instance 2 uses injected logger
  const c2 = document.createElement("my-component");
  c2.first = "Sally";
  c2.last = "Joe";
  testRoot.appendChild(c2);

  return testRoot;
};
