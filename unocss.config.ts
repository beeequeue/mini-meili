import presetIcons from "@unocss/preset-icons"
import presetWebFonts from "@unocss/preset-web-fonts"
import presetUno from "@unocss/preset-wind3"
import compileClass from "@unocss/transformer-compile-class"
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
  transformers: [compileClass({ alwaysHash: true })],
  rules: [
    [/ratio-(\d+)/, ([, n]) => ({ "aspect-ratio": `1 / ${n}` })],
    [/opac-(.+)/, ([, value]) => ({ opacity: value })],
    [/trans-(.+)/, ([, name]) => ({ "view-transition-name": name })],
  ],
})
