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
