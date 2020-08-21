import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "my-child-component",
  scoped: true,
})
export class MyChildComponent {
  @Prop() childNames?: string[];
  render() {
    const childNames = this.childNames || [];
    return (
      <Host>
        <ul>
          {childNames.map((child) => (
            <li>{child}</li>
          ))}
        </ul>
      </Host>
    );
  }
}
