import type { Components, JSX } from "../types/components";

interface CustomClock extends Components.CustomClock, HTMLElement {}
export const CustomClock: {
  prototype: CustomClock;
  new (): CustomClock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
