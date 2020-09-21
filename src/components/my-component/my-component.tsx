import { Component, Prop, h } from "@stencil/core";
import { UserState } from "../data/user";
import { UserNameFormatter } from "../data/converters";
import {
  Logger,
  LoggerInjectionToken,
  OtherService,
  UserService,
} from "../../services";
import { Inject, injectProps } from "../../dependency-injection";
@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  scoped: true,
})
// @injectable()
export class MyComponent implements UserState {
  // constructor(@inject(LoggerInjectionToken) private logger: Logger) {}
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

  @Prop()
  logger: Logger;

  @Prop()
  @Inject()
  userService: UserService;

  @Prop()
  otherService: OtherService;

  render() {
    this.logger?.log(`BEGIN: RENDER`);
    this.logger?.log(`IsAuthenticated? ${this.userService?.isAuthenticated}`);
    this.logger?.log(`value: ${this.otherService?.getValue()}`);
    return (
      <div>
        <pre>
          {JSON.stringify(
            {
              first: this.first,
              middle: this.middle,
              last: this.last,
              logger: this.logger,
            },
            null,
            "  "
          )}
        </pre>
      </div>
    );
  }
}

injectProps(MyComponent, {
  logger: LoggerInjectionToken,
  // userService: UserService,
  otherService: OtherService,
});
