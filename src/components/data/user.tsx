import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";

export interface UserState {
  first: string;
  middle: string;
  last: string;
}

export default createProviderConsumer<UserState>(
  {
    first: null,
    middle: null,
    last: null,
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);
