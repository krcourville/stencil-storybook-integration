import "reflect-metadata";

import { container } from "tsyringe";

import {
  Logger,
  ConsoleLogger,
  LoggerInjectionToken,
  UserService,
  OtherService,
} from "../services";

import { createInjector, createPropInjector } from "./inject-utils";

/**
 * BEGIN: Service registration
 */

/**
 * Register an instance
 */
const otherServiceInstance = new OtherService();
container.registerInstance(OtherService, otherServiceInstance);

/**
 * Register via contructor
 */
container.registerSingleton(UserService);

/**
 * Register a service using an interface.
 * NOTE: Requires use of an InjectionToken
 * NOTE2: This also allows for registering any arbitratry value.
 */
container.registerSingleton<Logger>(LoggerInjectionToken, ConsoleLogger);

/**
 * You can use factory functions, too
 */
// .register(UserService, (...args: []) => otherServiceInstance);

/**
 * END: Service registration
 */

/**
 * Initialize the injection helpers
 */

/** Injection via Typescript property decorator */
export const Inject = createInjector(container);

/** Injection via contructor decoration */
export const injectProps = createPropInjector(container);
