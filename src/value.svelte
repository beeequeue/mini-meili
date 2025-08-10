<script lang="ts">
  import Value from "./value.svelte"

  type Props = {
    value: unknown
    class?: string
  }

  const { value, class: className }: Props = $props()
</script>

<td class={[":unocss: text-4.5 w-full select-text px-4 py-1.5 font-serif", className]}>
  {#if value === null || value === undefined}
    {value === null ? "null" : "undefined"}
  {:else if Array.isArray(value)}
    {value.join(", ")}
  {:else if typeof value === "object"}
    <div class="text-3.5">
      {#each Object.entries(value).filter(([key]) => key !== "id") as [key, val]}
        <span class=":unocss: mr-0.25 text-gray-400">{key}:</span>
        <Value class=":unocss: text-4 p-0! mr-2 inline" value={val} />
      {/each}
    </div>
  {:else if typeof value === "boolean" || typeof value === "number"}
    {value.toString()}
  {:else if typeof value === "string"}
    {#if value?.includes?.("\n")}
      {#each value.split("\n") as line}
        {line}
        <br />
      {/each}
    {:else if value?.includes?.("\r\n")}
      {#each value.split("\r\n") as line}
        {line}
        <br />
      {/each}
    {:else}
      {value}
    {/if}
  {/if}
</td>
