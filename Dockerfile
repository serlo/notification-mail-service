FROM node:16-alpine3.17 as dependencies
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile --production=true --silent

FROM dependencies as build
COPY src src
COPY tsconfig.json .
COPY tsconfig.prod.json .
RUN yarn build

FROM node:16-alpine3.17 as release
COPY --from=build /usr/src/app/dist dist
ENTRYPOINT ["node", "dist"]