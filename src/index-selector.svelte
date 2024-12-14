<script lang="ts">
  import { createSelect, melt } from "@melt-ui/svelte"
  import { untrack } from "svelte"
  import { fade } from "svelte/transition"

  type Props = {
    indexes: { uid: string; count: number }[]
    selected: string | null
  }

  let { indexes, selected: selectedProp = $bindable() }: Props = $props()

  $effect(() => {
    if (selectedProp == null) return

    untrack(() => {
      selected.set({ value: selectedProp! })
    })
  })

  const {
    elements: { trigger, menu, option },
    states: { open, selected },
    helpers: { isSelected },
  } = createSelect<string>({
    forceVisible: true,
    positioning: {
      placement: "bottom",
      fitViewport: true,
      sameWidth: true,
    },
  })

  selected.subscribe((value) => {
    if (value == null) return

    selectedProp = value.value
  })
</script>

<button
  class="bg-#151515 b-b-solid b-b-2 b-red-4 flex min-w-[175px] items-center justify-between pl-4 pr-3"
  use:melt={$trigger}
  aria-label="Select an index"
>
  {selectedProp ?? "Select an index"}
  <span
    class="i-lucide:chevron-down transition-property-transform transition"
    class:rotate-180={$open}
  ></span>
</button>

{#if $open}
  <div
    class="bg-#151515 z-10 flex max-h-[300px] flex-col overflow-y-auto focus:!ring-0"
    use:melt={$menu}
    transition:fade={{ duration: 150 }}
  >
    {#each indexes as index}
      <div
        class="data-[highlighted]:bg-#181818 data-[highlighted]:text-red-4 data-[selected]:text-red-4 relative flex cursor-pointer items-center gap-2 p-2"
        use:melt={$option({ value: index.uid })}
      >
        {index.uid}
        <div
          class="i-lucide:check h-5 w-5 opacity-0"
          class:opacity-100={$isSelected(index.uid)}
        ></div>

        <span class="text-2.75 ml-auto">
          {index.count}
        </span>
      </div>
    {/each}
  </div>
{/if}
