import type { Components, JSX } from "../types/components";

interface ModerateInfo extends Components.ModerateInfo, HTMLElement {}
export const ModerateInfo: {
  prototype: ModerateInfo;
  new (): ModerateInfo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
