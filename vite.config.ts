import { svelte } from "@sveltejs/vite-plugin-svelte"
import unocss from "@unocss/vite"
import { defineConfig } from "vite"

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

  plugins: [svelte(), unocss()],
})
