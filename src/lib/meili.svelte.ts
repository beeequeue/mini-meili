import { MeiliSearch } from "meilisearch"

export const meiliApiKey = $state<string>()
export const meiliHost = $state<string>(
  import.meta.env.PROD
    ? `${window.location.protocol}//${window.location.hostname}:7700`
    : "http://localhost:7700",
)

export const meili = new MeiliSearch({
  host: meiliHost,
  apiKey: meiliApiKey,
})

$effect.root(() => {
  meili.config.host = meiliHost
  meili.config.apiKey = meiliApiKey
})
