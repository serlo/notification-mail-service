FROM node:18-alpine3.18
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn --immutable --immutable-cache --silent

COPY src src
COPY tsconfig.json .
COPY tsconfig.prod.json .
RUN yarn build

ENV NODE_OPTIONS='--experimental-specifier-resolution=node'
ENTRYPOINT ["node", "dist"]
