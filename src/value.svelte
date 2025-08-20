<script lang="ts">
  import Value from "./value.svelte"

  type Props = {
    key: string
    value: unknown
    class?: string
  }

  const { value, key, class: className }: Props = $props()

  const imageExtensions = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg"])
  const isUrl = $derived(typeof value === "string" && value?.startsWith("https://"))
  const ext = $derived(
    isUrl ? (value as string).slice((value as string).lastIndexOf(".")) : null,
  )
  const isImageUrl = $derived(isUrl && imageExtensions.has(ext!))
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
        <Value {key} value={val} class=":unocss: text-4 p-0! mr-2 inline" />
      {/each}
    </div>
  {:else if typeof value === "boolean" || typeof value === "number"}
    {value.toString()}
  {:else if typeof value === "string"}
    {#if value.startsWith("data:image/") || (isUrl && (isImageUrl || key
            .toLowerCase()
            .includes("image")))}
      <a
        href={value}
        target="_blank"
        rel="noopener"
        class="line-clamp-3 flex items-center gap-2 text-sm"
      >
        <img src={value} alt={key} class="max-h-16 max-w-96 object-contain" />
        {#if isUrl}
          {value}
        {/if}
      </a>
    {:else if isUrl && !isImageUrl}
      <a href={value} target="_blank" rel="noopener">{value}</a>
    {:else if value.includes?.("\n")}
      {#each value.split("\n") as line}
        {line}
        <br />
      {/each}
    {:else if value.includes?.("\r\n")}
      {#each value.split("\r\n") as line}
        {line}
        <br />
      {/each}
    {:else}
      {value}
    {/if}
  {/if}
</td>
