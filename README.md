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

## File Structure
## src
Contain folders which create service 

## src/config
this folder contain the configuration of the app 

## src/constants
this folder contain all the constants, enums etc use in the app 

## src/controller
Control the Request and Response 

## src/cron
contain scheduler so whnever we need to Initialize ay scheduler we can add cron to this folder 

## src/db
As our appliation is too small so instead of moodels. I am using db folder which contaiin queries to perform operation so anything needd to be change or implement any ORM or query builder cause effect in this Folder 

## src/helper
contain generic function which ensure reuseability of code 

## src/helper
All the llibary function like `node-mailer` `moment` will call from this folder so in future any library depreciated so we only do changes in this folder 

## src/middleware
all pre and post request operation call from  here 

## src/routes
route folder contain all the api's path as per folder structre so we can easily get the api path or seperate as per our folder 

## src/service 
All the business logic are written here so we can use is as generic way 

### What TO DO NEXT 
I don't use typescript properly so we should create interface and class properly for this app 
As I face some issue while configure docker which will fix soon 
Unit Test would be written 
Instead of direct html implement ejs to handle template for email 

