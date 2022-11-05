import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const CustomClock$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.time = Date.now();
  }
  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }
  disconnectedCallback() {
    window.clearInterval(this.timer);
  }
  render() {
    const time = new Date(this.time).toLocaleTimeString();
    return h("span", null, time);
  }
}, [0, "custom-clock", {
    "time": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["custom-clock"];
  components.forEach(tagName => { switch (tagName) {
    case "custom-clock":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CustomClock$1);
      }
      break;
  } });
}
defineCustomElement$1();

const CustomClock = CustomClock$1;
const defineCustomElement = defineCustomElement$1;

export { CustomClock, defineCustomElement };
