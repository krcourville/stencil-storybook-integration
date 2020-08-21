import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";

export interface UserNameFormatter {
  (first: string, middle: string, last: string): string;
}

export interface ConvertersState {
  userName: UserNameFormatter;
}

export default createProviderConsumer<ConvertersState>(
  {
    userName: null,
  },
  (subscribe, child) => {
    <context-consumer subscribe={subscribe} renderer={child} />;
  }
);
