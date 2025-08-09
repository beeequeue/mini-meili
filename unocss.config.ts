import presetIcons from "@unocss/preset-icons"
import presetUno from "@unocss/preset-wind3"
import presetWebFonts from "@unocss/preset-web-fonts"
import transformerDirectives from "@unocss/transformer-directives"
import { defineConfig } from "@unocss/vite"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: { name: "Nunito", provider: "fontsource" },
        serif: { name: "Crimson Pro", provider: "fontsource" },
      },
    }),
  ],
  safelist: ["pt-50px"],
  transformers: [transformerDirectives()],
  rules: [
    [/ratio-(\d+)/, ([, n]) => ({ "aspect-ratio": `1 / ${n}` })],
    [/opac-(.+)/, ([, value]) => ({ opacity: value })],
    [/trans-(.+)/, ([, name]) => ({ "view-transition-name": name })],
  ],
})
