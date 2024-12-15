FROM node:22-alpine as build

RUN corepack enable

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY .npmrc .

ENV PNPM_HOME=/pnpm
ENV CI=1
ENV NODE_ENV=development
# Install dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY public/ ./public/
COPY src/ ./src/
COPY index.html svelte.config.js tsconfig.json unocss.config.ts vite.config.ts ./

ENV NODE_ENV=production
RUN pnpm build

FROM nginx:1-alpine

COPY --from=build /app/dist /usr/share/nginx/html
