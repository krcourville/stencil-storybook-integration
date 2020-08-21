import { h, Component } from "@stencil/core";
import UserStateTunnel, { UserState } from "../data/user";
import ConvertersStateTunnel, { ConvertersState } from "../data/converters";

@Component({
  tag: "app-root",
})
export class App {
  render() {
    const user: UserState = {
      first: "Ted",
      middle: "E",
      last: "Bear",
    };
    const converters: ConvertersState = {
      userName: (user) => [user.first, user.middle, user.last].join(" "),
    };
    return (
      <UserStateTunnel.Provider state={user}>
        <ConvertersStateTunnel.Provider state={converters}>
          <div>App</div>
          <slot></slot>
        </ConvertersStateTunnel.Provider>
      </UserStateTunnel.Provider>
    );
  }
}
