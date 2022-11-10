/* eslint-disable no-console */
/*
 * Sometimes the connection to the database doesn't work (unless you use the mysql cli)
 * Investigating if this a problem of the library, code (maybe use instead pool) or whatever...
 *
 * By me hugotiburtino it got stock at tryVeryComplexQuery.
 * After that running `top` in terminal the mysqld where still consuming a lot of memory
 * so that I had to `yarn stop` it.
 *
 *
 */

// eslint-disable-next-line import/no-internal-modules
import { Connection, createConnection } from 'mysql2/promise'

import { config } from '../src/config'

void runExperiment().then(() => {})

// where does it throw an error or get stock?
async function runExperiment() {
  const connection = await createConnection(config.db)
  await tryTwoConnection(connection)

  await tryVeryComplexQuery(connection)
}

async function tryTwoConnection(connection: Connection) {
  const [userRows] = await connection.query('select * from user limit 2')
  console.log({ userRows })
  const connection2 = await createConnection(config.db)
  const [notificationRows] = await connection2.query(
    'select * from notification limit 2'
  )
  console.log({ notificationRows })
}

async function tryVeryComplexQuery(connection: Connection) {
  const [complexRows] = await connection.execute(
    `SELECT GROUP_CONCAT(notification.id) as notification_ids, notification.user_id, user.username, user.email, 
            GROUP_CONCAT(event_log.event_id) as event_ids, GROUP_CONCAT(event_log.date) as dates, GROUP_CONCAT(actor.username) as actor_names          
          FROM notification
          INNER JOIN user ON user.id = notification.user_id 
          INNER JOIN notification_event ON notification.id = notification_event.notification_id
          INNER JOIN event_log ON event_log.id = notification_event.event_log_id
          JOIN event ON event.id = event_log.event_id
          LEFT JOIN event_parameter ON event_parameter.log_id =  event_log.id
          LEFT JOIN event_parameter_uuid ON event_parameter_uuid.event_parameter_id = event_parameter.id
          INNER JOIN user actor ON event_log.actor_id = actor.id
          INNER JOIN subscription ON subscription.user_id = user.id AND event_parameter_uuid.uuid_id = subscription.uuid_id
          WHERE notification.email = 1 AND notification.email_sent = 0 AND notification.seen = 0
          GROUP BY notification.user_id;`
  )
  console.log({ complexRows })
}
