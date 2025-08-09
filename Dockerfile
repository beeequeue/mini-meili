FROM node:24-alpine as build

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

ENV PNPM_HOME=/pnpm
ENV CI=1
ENV NODE_ENV=development
# Install dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY public/ ./public/
COPY src/ ./src/
COPY index.html svelte.config.js tsconfig.json unocss.config.ts vite.config.ts ./

ARG GIT_SHA
ENV GIT_SHA=$GIT_SHA
ENV NODE_ENV=production
RUN pnpm build

FROM nginx:1-alpine

COPY --from=build /app/dist /usr/share/nginx/html
