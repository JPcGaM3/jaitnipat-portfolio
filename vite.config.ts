import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// Avoid the rollup-terser crash on Node 23+ when Workbox bundles the service worker.
// const nodeMajorVersion = Number(process.versions.node.split(".")[0] ?? 0);
// const workboxMode = nodeMajorVersion >= 23 ? "development" : "production";

export default defineConfig({
  base: "/jaitnipat-portfolio/",
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Portfolio",
        short_name: "Portfolio",
        description:
          "PWA-ready portfolio built with React, Vite, Tailwind CSS, and Bun.",
        theme_color: "#0f172a",
        background_color: "#020617",
        display: "standalone",
        start_url: "/jaitnipat-portfolio/",
        scope: "/jaitnipat-portfolio/",
        icons: [
          {
            src: "favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
      workbox: {
        // mode: workboxMode,
        globPatterns: ["**/*.{js,css,html,svg,png,ico,webmanifest}"],
      },
    }),
  ],
  server: {
    host: true,
  },
});
