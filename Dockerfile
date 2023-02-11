FROM node:16-alpine3.17
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn --immutable --immutable-cache --silent

COPY src src
COPY tsconfig.json .
COPY tsconfig.prod.json .
RUN yarn build

ENTRYPOINT ["node", "dist"]