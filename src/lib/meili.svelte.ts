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

  client = $derived.by(() => {
    localStorage.setItem("meili_host", this.host)
    if (this.apiKey != null) {
      localStorage.setItem("meili_api_key", this.apiKey)
    }

    return new MeiliSearch({
      host: this.host,
      apiKey: this.apiKey ?? undefined,
    })
  })
}

export const meili = new MeiliConfig()
