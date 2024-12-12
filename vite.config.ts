import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import unocss from "@unocss/vite"

export default defineConfig({
  build: {
    target: "firefox125",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("/svelte/")) {
              return "svelte"
            }
          }
        },
      },
    },
  },

  plugins: [svelte(), unocss()],
})
