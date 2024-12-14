import { svelte } from "@sveltejs/vite-plugin-svelte"
import unocss from "@unocss/vite"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  build: {
    target: "firefox125",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes(".pnpm/svelte")) {
              return "svelte"
            }
            if (id.includes(".pnpm/meilisearch")) {
              return "meilisearch"
            }
            if (id.includes(".pnpm/@melt")) {
              return "melt"
            }
          }
        },
      },
    },
  },

  plugins: [
    svelte(),
    unocss(),
    VitePWA({
      registerType: "prompt",
      injectRegister: "script-defer",
      manifest: {
        name: "mini-meili, a tiny MeiliSearch web client",
        theme_color: "#15151",
        display: "minimal-ui",
        orientation: "portrait",
        icons: [
          {
            src: "/icon.svg",
            sizes: "256x256",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
})
