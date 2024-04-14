FROM node:20-alpine as base_image
WORKDIR /app

FROM base_image as build
COPY tsconfig.json tsconfig.prod.json package.json yarn.lock ./
COPY .yarn .yarn
COPY src src
RUN yarn --immutable --immutable-cache --silent
RUN yarn build

FROM base_image as runner
ENV NODE_OPTIONS='--experimental-specifier-resolution=node'
COPY --from=build /app/dist dist
ENTRYPOINT ["node", "dist"]
