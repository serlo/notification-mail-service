# serlo.org - Notification Mail Service

Micro-service that notifies users by email about last events they subscribed to.

## Getting started

### Requirements:

- [Node.js](https://nodejs.org) and [yarn cli](https://yarnpkg.com/cli/) from [.tool-versions](.tool-versions)
  - You may use [asdf](https://asdf-vm.com/) for the installation.
- Docker and docker-compose (Highly recommended)
- https://github.com/serlo/local-dev-env cloned
- https://github.com/serlo/api.serlo.org cloned

### Preparations

- `cd` to `serlo/api.serlo.org` and `yarn start`
- `cd` to `serlo/local-dev-env` and `yarn start:without:api`

### Developing

After cloning this repo and `cd` into it:

1. `yarn` for installing dependencies.
2. `yarn start` for running local testing database and fake email client. [^1]
3. `yarn notify`
4. Navigate to the `http://localhost:4444/` to see your local mail client. [^1]
5. Go to `serlo/local-dev-env` and hit `yarn mysql:rollback` to roll back the database changes.
6. When you are done, `yarn stop`.

[^1]: You don't need this step if you bring your own database, smtp server and/or email client. In that case adapt the `.env` and maybe the `docker-compose.yml`.

## Using API

For now this service uses info from API as an easy way of enriching the notification email body.
If you change any graphql query, use `yarn codegen`.

## Developing templates

Run `yarn template`.

## Running tests

<!-- For e2e testing you need to have `yarn start`ed, with the database in the original state (use `yarn mysql:rollback`). -->

Run `yarn test:unit`.

## Releasing a new version
We release new versions by hand. Run the following commands:
```
docker build . -t eu.gcr.io/serlo-shared/notification-mail:${new version}
docker push eu.gcr.io/serlo-shared/notification-mail:${new version}
```

## Helpful Info

Use `yarn mysql` to prompt to the cli of your local database.  
Use `yarn format` for linting and formatting.

<!-- By default, it will use the Serlo's staging API. If you prefer to use a local API, start it and set it in `.env`. -->
