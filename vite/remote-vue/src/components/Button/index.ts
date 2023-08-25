import { createApp, defineCustomElement } from "vue";
import Button from "./Button.vue";

const mount = (el: HTMLElement) => {
  const app = createApp(Button);
  app.mount(el);
};

export { Button, mount };

export default Button;

// Web Components
const ButtonElement = defineCustomElement(Button);
customElements.define("vue-button", ButtonElement);
