import { createApp } from "vue";
import Button from "./Button.vue";

const mount = (el: HTMLElement) => {
  const app = createApp(Button);
  app.mount(el);
};

export { Button, mount };

export default Button;
