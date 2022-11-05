import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const moderateSlotCss = ":host{display:block}.start{color:blue}.end{color:red}";

const ModerateSlot$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, [
      h("div", { class: 'start' }, h("slot", { name: "start" })),
      h("h1", null, '⬆️slot测试⬇️'),
      h("div", { class: 'start' }, h("slot", { name: "end" })),
    ]));
  }
  static get style() { return moderateSlotCss; }
}, [1, "moderate-slot"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["moderate-slot"];
  components.forEach(tagName => { switch (tagName) {
    case "moderate-slot":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModerateSlot$1);
      }
      break;
  } });
}
defineCustomElement$1();

const ModerateSlot = ModerateSlot$1;
const defineCustomElement = defineCustomElement$1;

export { ModerateSlot, defineCustomElement };
