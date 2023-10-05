import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_react",
      remotes: {
        remote_react: {
          external: "http://localhost:8081/remoteEntry.js",
          format: "esm",
          from: "webpack",
        },
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
