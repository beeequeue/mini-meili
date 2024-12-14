import { MeiliSearch } from "meilisearch"

class MeiliConfig {
  apiKey = $state<string | null>(
    new URLSearchParams(window.location.search).get("api_key") ??
      localStorage.getItem("meili_api_key"),
  )

  host = $state<string>(
    new URLSearchParams(window.location.search).get("host") ??
      localStorage.getItem("meili_host") ??
      (import.meta.env.PROD
        ? `${window.location.protocol}//${window.location.hostname}:7700`
        : "http://localhost:7700"),
  )

  client = $derived(
    new MeiliSearch({
      host: this.host,
      apiKey: this.apiKey ?? undefined,
      clientAgents: [`mini-meili ${import.meta.env.SHA ?? "v?"}`],
    }),
  )
}

export const meili = new MeiliConfig()
