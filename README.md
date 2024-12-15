# mini-meili, a tiny MeiliSearch web client

An alternative to the official, unmaintained [Mini Dashboard](https://github.com/meilisearch/mini-dashboard) and [meilisearch-ui](https://github.com/riccox/meilisearch-ui).

- More features
  - Actually usable on small screens
  - Usable via keyboard only (visual feedback should be improved)
  - _(todo) Exclude fields in index_
- More portable
  - Can connect to any MeiliSearch instance
  - Easy to self-host if need be
  - Configure via URL parameters
- More smaller
  - 235kb vs. 933kb vs. 5mb
  - Built with Svelte 5

## Self-hosting

### Docker

A docker image is available that uses nginx to serve the static files for you.

```command
docker run -d -p {YOUR PORT}:80 --name mini-meili ghcr.io/beeequeue/mini-meili:latest
```

```yaml
# compose.yml
services:
  mini-meili:
    image: ghcr.io/beeequeue/mini-meili:latest
    container_name: mini-meili
    restart: always
    ports:
      - {YOUR PORT}:80
```

## Development

1. Set up node and pnpm
1. Install dependencies: `pnpm install`
1. Run dev server: `pnpm dev`
1. Open `localhost:5173` in your browser
