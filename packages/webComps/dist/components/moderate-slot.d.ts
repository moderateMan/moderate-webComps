import type { Components, JSX } from "../types/components";

interface ModerateSlot extends Components.ModerateSlot, HTMLElement {}
export const ModerateSlot: {
  prototype: ModerateSlot;
  new (): ModerateSlot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
