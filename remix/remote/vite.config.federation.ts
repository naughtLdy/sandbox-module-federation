import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      buildDirectory: "build_federation",
    }),
    tsconfigPaths(),
    federation({
      name: "remote_remix",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./app/components/Button",
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    ssr: false,
    assetsDir: 'federation',
  },
});
