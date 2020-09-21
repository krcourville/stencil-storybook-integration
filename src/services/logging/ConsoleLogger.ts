import { Logger } from "./Logger";

export class ConsoleLogger implements Logger {
  type = "ConsoleLogger";

  log(message: string): void {
    console.log("CONSOLE-LOGGER", message);
  }
}
