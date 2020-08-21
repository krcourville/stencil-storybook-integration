import { Component, Prop, h } from "@stencil/core";
import UserTunnel, { UserState } from "../data/user";
import ConvertersTunnel, { UserNameFormatter } from "../data/converters";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  scoped: true,
})
export class MyComponent implements UserState {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() userName: UserNameFormatter;

  render() {
    const formattedUserName = this.userName(this.first, this.middle, this.last);
    return <div>The provided name was: {formattedUserName}</div>;
  }
}

UserTunnel.injectProps(MyComponent, ["first", "middle", "last"]);
ConvertersTunnel.injectProps(MyComponent, ["userName"]);
