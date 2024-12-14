<script lang="ts">
  import type { SearchResponse } from "meilisearch"
  import { debounce } from "es-toolkit"
  import Config from "./config.svelte"
  import { meili } from "./lib/meili.svelte"
  import TextInput from "./text-input.svelte"

  let inputValue = $state("test test")
  $effect(() => {
    if (inputValue.length < 2) return

    search(inputValue)
  })

  let response = $state.raw<SearchResponse | null>(null)

  const search = debounce(async (input: string) => {
    // TODO: switch index
    const res = await meili.client.index("mhrise").search(input, { page: 1 })

    response = res
  }, 250)

  const fetchNextPage = async () => {
    if (response == null) return

    const res = await meili.client
      .index("mhrise")
      .search(inputValue, { page: response.page! + 1 })

    response = {
      ...res,
      hits: [...response.hits, ...res.hits],
    }
  }
</script>

<Config />

<main
  class="md:min-w-650px w-100% md:w-65% pt-40% transition-duration-750ms transition-property-padding relative mx-auto flex h-full min-h-0 flex-col items-center transition"
  class:pt-50px={(response?.hits.length ?? 0) > 0}
>
  <TextInput
    id="search"
    class="w-350px"
    placeholder="Search for something..."
    bind:value={inputValue}
  />

  {#if response != null}
    <div class="mt-4">
      <span>
        {response.estimatedTotalHits ?? response.totalHits ?? response.hits.length} hits in
        {response.processingTimeMs}ms
      </span>
    </div>

    <div class="pb-50px rd-lg mt-4 flex w-full flex-col items-center overflow-y-auto">
      {#each response.hits as hit}
        <table class="not-first:mt-4 bg-#151515 rd-lg w-full">
          <tbody>
            {#each Object.keys(hit) as key}
              <tr class="not-last:b-b-solid b-b-1 b-b-red-4">
                <td class="text-3 text-gray-4 w-fit py-1.5 pl-4 text-end">
                  {key}
                </td>
                <td class="text-4.5 w-full px-4 py-1.5 font-serif">{hit[key]}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/each}

      {#if (response.totalPages ?? 0) > (response.page ?? 0)}
        <button
          class="bg-#151515 b-solid b-1 b-red-4 b-rd-lg mt-4 cursor-pointer p-2 px-4"
          onclick={fetchNextPage}
        >
          Load more
        </button>
      {/if}
    </div>
  {/if}
</main>

<a
  target="_blank"
  rel="noopener"
  href="https://github.com/beeequeue/remsg-editor"
  class="mt-auto flex shrink-0 items-center justify-center p-1"
>
  <div class="i-simple-icons:github mr-1"></div>
  made by beequeue
</a>

<style>
  :global(html) {
    user-select: none;
  }

  :global(a) {
    color: #007aff;
  }
</style>
