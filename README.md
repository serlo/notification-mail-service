# serlo.org - Notification Mail Service
Micro-service that notify user by emails

## Getting stated
`docker-compose up -d` (or, if you have Yarn installed `yarn start`) for running local testing database and fake email client.
When you are done, `docker-compose down` or `yarn stop`.
to run server use `yarn serve` (Todo :: run through dockers )
to run scheduler use `yarn scheduler`(Todo: run through dockers )

## Helpful Tips
For running scripts you need Node, Yarn and Typescript installed.  
Use `yarn mysql` to prompt to the cli of your local databse.  
Use `smtps://test:test@localhost:2500/?skip_ssl_verify=true` to set you stmp.  
Navigate to the `http://localhost:8080/` to see your local mail client.

## Purpose of this Service 
Handle the email sending process through cron as well by API `${host}/email` for sending Urgent mail


