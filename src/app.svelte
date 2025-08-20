<script lang="ts">
  import type { SearchResponse } from "meilisearch"
  import { debounce } from "es-toolkit"
  import Config from "./config.svelte"
  import IndexSelector from "./index-selector.svelte"
  import { meili } from "./lib/meili.svelte"
  import TextInput from "./text-input.svelte"
  import Value from "./value.svelte"

  $effect(() => {
    window.history.pushState({}, "", window.location.pathname)
  })

  let inputValue = $state("")
  $effect(() => {
    if (inputValue.length < 2 || selectedIndex == null) return

    search(inputValue)
  })

  let indexes = $state.raw<{ uid: string; count: number }[]>([])
  let selectedIndex = $state<string | null>(null)
  const fetchIndexes = async () => {
    const response = await meili.client.getStats()

    indexes = Object.entries(response.indexes).map(([uid, { numberOfDocuments }]) => ({
      uid,
      count: numberOfDocuments,
    }))

    if (indexes.length === 1) {
      selectedIndex = indexes[0].uid
    }
  }
  fetchIndexes()

  let result = $state.raw<SearchResponse | null>(null)
  const hasHits = $derived((result?.hits.length ?? 0) !== 0)

  const search = debounce(async (input: string) => {
    const response = await meili.client.index(selectedIndex!).search(input, { page: 1 })

    result = response
  }, 250)

  const fetchNextPage = async () => {
    if (result == null) return

    const res = await meili.client
      .index(selectedIndex!)
      .search(inputValue, { page: result.page! + 1 })

    result = {
      ...res,
      hits: [...result.hits, ...res.hits],
    }
  }
</script>

<Config />

<main
  class="md:min-w-650px w-100% md:w-65% pt-45vh transition-duration-750ms transition-property-padding relative mx-auto flex h-full min-h-0 flex-col items-center transition"
  class:pt-50px={hasHits}
>
  <div class="flex gap-2">
    <IndexSelector {indexes} bind:selected={selectedIndex} />

    <TextInput
      id="search"
      icon="search"
      className="w-300px"
      placeholder="Search for something..."
      bind:value={inputValue}
    />
  </div>

  {#if result != null}
    <div class="mt-4">
      <span>
        {result.estimatedTotalHits ?? result.totalHits ?? result.hits.length} hits in
        {result.processingTimeMs}ms
      </span>
    </div>

    <div
      class=":uno: pb-50px rd-lg mt-4 flex w-full flex-col items-center overflow-y-auto"
    >
      {#each result.hits as hit}
        <table class=":uno: not-first:mt-4 bg-#151515 rd-lg w-full">
          <tbody>
            {#each Object.keys(hit) as key}
              <tr class=":uno: not-last:b-b-solid b-b-1 b-b-red-4">
                <td class=":uno: text-3 text-gray-4 w-fit py-1.5 pl-4 text-end">
                  {key}
                </td>

                <Value {key} value={hit[key]} />
              </tr>
            {/each}
          </tbody>
        </table>
      {/each}

      {#if (result.totalPages ?? 0) > (result.page ?? 0)}
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

<div class="text-gray-4 mt-auto flex shrink-0 items-center justify-center gap-2 p-1">
  <a
    target="_blank"
    rel="noopener"
    href="https://github.com/beeequeue/mini-meili"
    class="flex items-center"
  >
    <div class="i-simple-icons:github mr-1"></div>
    made by beequeue
  </a>
  <span>•</span>
  <span class="text-3.5">{import.meta.env.GIT_SHA.slice(0, 7)}</span>
</div>

<style>
  :global(html) {
    user-select: none;
  }

  :global(a) {
    color: #007aff;
  }
</style>
