import { h, Component, State, Host } from "@stencil/core";

interface FormState {
  name?: string;
  age?: number;
}

@Component({
  tag: "my-form",
  styleUrl: "my-form.css",
  scoped: true,
})
export class MyForm {
  @State() state: FormState = {};

  onInputChange = (evt: Event) => {
    const input = evt.target as HTMLInputElement;
    let value: string | number;
    if (input.type === "number") {
      value = +input.value;
    } else {
      value = input.value;
    }
    const key = input.name;
    this.state = {
      ...this.state,
      [key]: value,
    };
  };

  onInputFocus = (evt: FocusEvent) => {
    console.log("FOCUS", evt);
  };

  render() {
    return (
      <Host>
        <form>
          <div>
            <label>
              <span>Name</span>
              <input
                name="name"
                onInput={this.onInputChange}
                onFocus={this.onInputFocus}
              />
            </label>
          </div>
          <div>
            <label>
              <span>Age</span>
              <input name="age" type="number" onInput={this.onInputChange} />
            </label>
          </div>
        </form>
        <code>{JSON.stringify(this.state, null, "  ")}</code>
      </Host>
    );
  }
}
