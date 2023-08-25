import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host_vue",
      remotes: {
        remote_react: "http://localhost:5001/assets/remoteEntry.js",
        remote_vue: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
