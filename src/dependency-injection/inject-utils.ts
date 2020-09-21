import { ComponentInterface } from "@stencil/core";

import { InjectionToken, DependencyContainer } from "tsyringe";

export const createInjector = (container: DependencyContainer) => {
  const injectedInstances = new Set<ComponentInterface>();

  return <T>(token: InjectionToken<T> = null): PropertyDecorator => {
    return (target: ComponentInterface, propertyKey: string) => {
      const originalConnectedCallback = target.connectedCallback;
      const originalDisconnectedCallback = target.disconnectedCallback;

      target.connectedCallback = function () {
        const instance = this as ComponentInterface;
        // connectedCallback may be called multiple times in a
        // component's lifetime.  Only perform injection once.
        if (!injectedInstances.has(instance)) {
          injectedInstances.add(instance);
          token =
            token || Reflect.getMetadata("design:type", target, propertyKey);
          if (!token) {
            throw new Error(
              `Failed to resolve injection token for ${propertyKey}`
            );
          }
          instance[propertyKey] =
            instance[propertyKey] || container.resolve(token);
        }

        if (originalConnectedCallback) {
          originalConnectedCallback.call(target);
        }
      };

      target.disconnectedCallback = function () {
        const instance = this as ComponentInterface;
        injectedInstances.delete(instance);

        if (originalDisconnectedCallback) {
          originalConnectedCallback.call(target);
        }
      };
    };
  };
};

export type PropList<T> = Record<Extract<keyof T, string>, InjectionToken>;

export const createPropInjector = (container: DependencyContainer) => <
  T extends { [key: string]: any }
>(
  Cstr: any,
  fieldList: PropList<T>
) => {
  const CstrPrototype = Cstr.prototype;
  const cstrConnectedCallback = CstrPrototype.connectedCallback;

  CstrPrototype.connectedCallback = function () {
    const instance = this as ComponentInterface;

    Object.keys(fieldList).forEach((prop) => {
      const token = fieldList[prop];
      console.log("INJECTING", { prop, token });
      try {
        instance[prop] = instance[prop] || container.resolve(token);
      } catch (e) {
        console.error(`ERROR: failed to inject ${prop}`, e);
      }
    });

    if (cstrConnectedCallback) {
      return cstrConnectedCallback.call(this);
    }
  };
};
