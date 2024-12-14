<script lang="ts">
import { debounce } from "es-toolkit"
import { meili } from "./lib/meili.svelte"
import Config from "./config.svelte"
import TextInput from "./text-input.svelte"

let inputValue = $state("test test")
$effect(() => {
  if (inputValue.length < 2) return

  search(inputValue)
})

const search = debounce(async (input: string) => {
  // TODO: switch index
  const res = await meili.index("mhrise").search(input)

  console.log(res.processingTimeMs, res.hits)
}, 250)
</script>

<Config />

<TextInput
  id="search"
  bind:value={inputValue}
/>

<div class="mt-auto flex w-full flex-col items-center justify-center">
  <a
    target="_blank"
    rel="noopener"
    href="https://github.com/beeequeue/remsg-editor"
    class="text-#eee fixed bottom-2 flex items-center"
  >
    <div class="i-simple-icons:github mr-1"></div>
    Made by beequeue
  </a>
</div>

<style>
:global(html) {
  user-select: none;
}

:global(a) {
  color: #007aff;
}
</style>
