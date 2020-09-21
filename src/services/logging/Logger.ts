import { InjectionToken } from "tsyringe";

export const LoggerInjectionToken: InjectionToken<Logger> =
  "LoggerInjectionToken";

export interface Logger {
  log(message: string): void;
}
