<script lang="ts">
  import { createDialog, melt } from "@melt-ui/svelte"
  import { MeiliSearch } from "meilisearch"
  import pDebounce from "p-debounce"
  import { fade } from "svelte/transition"
  import { meili } from "./lib/meili.svelte"
  import TextInput from "./text-input.svelte"

  const isUrl = (url: string) => {
    try {
      // eslint-disable-next-line no-new
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const {
    elements: { trigger, portalled, overlay, content, title, close },
    states: { open },
  } = createDialog({
    defaultOpen: meili.apiKey == null,
    role: meili.apiKey == null ? "alertdialog" : "dialog",
    escapeBehavior: meili.apiKey == null ? "ignore" : "close",
    closeOnOutsideClick: meili.apiKey != null,
  })

  let testing = $state(false)
  let apiKeyValue = $state(meili.apiKey ?? "")
  let hostValue = $state(meili.host)

  const testConfig = pDebounce(async () => {
    try {
      const client = new MeiliSearch({
        host: hostValue,
        apiKey: apiKeyValue.length > 0 ? apiKeyValue : undefined,
      })
      await Promise.all([client.getIndexes(), client.getStats(), client.getVersion()])

      return true
    } catch {
      return false
    }
  }, 350)

  $effect(() => {
    if (hostValue.length < 3 || !isUrl(hostValue)) return

    const previousApiKey = apiKeyValue
    testing = true
    testConfig().then((result) => {
      testing = false
      if (!result) return

      meili.host = hostValue
      meili.apiKey = apiKeyValue
      localStorage.setItem("meili_host", meili.host)
      if (meili.apiKey != null) {
        localStorage.setItem("meili_api_key", meili.apiKey)
      }

      if (previousApiKey == null) {
        open.set(false)
      }
    })
  })
</script>

<button use:melt={$trigger} class="fixed left-0 top-0 flex items-center gap-1 px-4 py-3">
  <span class="i-lucide:settings"></span>
  Config
</button>

{#if $open}
  <div use:melt={$portalled}>
    <div use:melt={$overlay} class="z-100 fixed inset-0 bg-black/50"></div>

    <div
      use:melt={$content}
      class="z-101 left-50% top-50% -translate-x-50% -translate-y-50% bg-#111 rd-xl fixed p-5 shadow-lg shadow-black"
    >
      <div class="flex items-center gap-2">
        <h2 use:melt={$title} class="m-0">Config</h2>

        {#if testing}
          <div transition:fade class="i-lucide:loader h-5 w-5 animate-spin"></div>
        {/if}

        {#if meili.apiKey != null}
          <button
            transition:fade
            use:melt={$close}
            aria-label="Close config dialog"
            class="i-lucide:x ml-auto cursor-pointer p-3"
          ></button>
        {/if}
      </div>

      <label class="flex flex-col">
        MeiliSearch API Key:

        <TextInput id="apiKey" icon="key" className="mt-1" bind:value={apiKeyValue} />
      </label>

      <label class="mt-2 flex flex-col">
        MeiliSearch host:

        <TextInput id="host" icon="url" className="mt-1" bind:value={hostValue} />
      </label>
    </div>
  </div>
{/if}
