import { html } from "lit-html";

export default {
  title: "Parent Component/Component",
};

export const Default = () => {
  // const names = ["Sally", "Joe", "Spot"];
  return html`
    <my-parent-component>
      <my-component first="Joe" last="Schmoe"></my-component>
      <my-child-component></my-child-component>
    </my-parent-component>
  `;
};
