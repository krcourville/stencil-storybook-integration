import { html } from "lit-html";

export default {
  title: "App/App",
};

export const Default = () => {
  return html`
    <div>
      <app-root>
        <my-component></my-component>
      </app-root>
    </div>
  `;
};
