import { existsSync, readFileSync } from "node:fs"

import { svelte } from "@sveltejs/vite-plugin-svelte"
import unocss from "@unocss/vite"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

const getGitSha = () => {
  const env = process.env.GIT_SHA ?? process.env.GITHUB_SHA
  if (env != null) {
    return env
  }

  if (existsSync(".git/HEAD")) {
    const head = readFileSync(".git/HEAD", "utf-8")
    if (head.startsWith("ref: ")) {
      const ref = head.slice(5).trim()
      return readFileSync(`.git/${ref}`, "utf-8").trim()
    }

    return head.trim()
  }

  return "unknown"
}

export default defineConfig({
  define: {
    "import.meta.env.GIT_SHA": JSON.stringify(getGitSha()),
  },

  build: {
    target: "firefox126",
    rollupOptions: {
      output: {
        advancedChunks: {
          groups: [
            {
              name: "svelte",
              test: /\.pnpm.svelte/,
            },
            {
              name: "meilisearch",
              test: /\.pnpm.meilisearch/,
            },
            {
              name: "melt",
              test: /\.pnpm.@melt/,
            },
          ],
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
