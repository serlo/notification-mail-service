# serlo.org - Notification Mail Service

Micro-service that notify users by email about last events

## Getting stated

Required:

- Nodejs
- Yarn
- Docker docker-compose (Highly recommended)

After cloning this repo and cd to it:

1. `yarn` for installing dependencies.
2. `yarn start` for running local testing database and fake email client.\*
3. `yarn notify`
4. Navigate to the `http://localhost:8080/` to see your local mail client.\*
5. Use `yarn mysql:rollback` for rolling back the database changes.
6. When you are done, `yarn stop`.

\* You don't need this step if you bring your own database, smtp server and/or email client. In that case adapt the `.env` and maybe the `docker-compose.yaml`.

## Running tests

For e2e testing you need to have `yarn start`ed, with the database in the original state (use `yarn mysql:rollback`).
Run `yarn test`.

## Helpful Commands

Use `yarn mysql` to prompt to the cli of your local database.  
Use `yarn format` for linting and formatting.
