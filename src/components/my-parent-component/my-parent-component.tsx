import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "my-parent-component",
  scoped: true,
})
export class MyParentComponent {
  render() {
    return (
      <Host>
        <h2>Parent Component</h2>
        <my-component></my-component>
        <slot></slot>
      </Host>
    );
  }
}
