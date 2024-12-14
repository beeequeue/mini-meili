<script lang="ts">
import { createDialog, melt } from "@melt-ui/svelte"

const {
  elements: { trigger, portalled, overlay, content, title, description, close },
  states: { open },
} = createDialog()
</script>

<button use:melt={$trigger} class="px-4 py-3 i-mdi:cog-outline">Config</button>

{#if $open}
  <div use:melt={$portalled}>
    <div use:melt={$overlay} />
    <div use:melt={$content}>
      <h2 use:melt={$title}>Dialog Title</h2>
      <p use:melt={$description}>Dialog description</p>
      <button use:melt={$close}> Close Dialog</button>
    </div>
  </div>
{/if}
