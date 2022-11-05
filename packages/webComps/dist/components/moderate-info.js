import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const moderateInfoCss = ":host{display:block}";

const ModerateInfo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (h("div", null, h("div", { class: 'info' }, this.getText())));
  }
  static get style() { return moderateInfoCss; }
}, [1, "moderate-info", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["moderate-info"];
  components.forEach(tagName => { switch (tagName) {
    case "moderate-info":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModerateInfo$1);
      }
      break;
  } });
}
defineCustomElement$1();

const ModerateInfo = ModerateInfo$1;
const defineCustomElement = defineCustomElement$1;

export { ModerateInfo, defineCustomElement };
