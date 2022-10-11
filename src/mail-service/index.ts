import { formattedDate } from '../utils'
import { getAllUnsentEmailData, updateNotificationSendStatus } from './db-query'
import { EventType, eventMessages } from './email-message'
import { sendMail } from './mail'
import { EmailData, EmailPayload } from './types'

export const filterDataForEmail = (emailData: EmailData[]) => {
  try {
    const emailPayload: EmailPayload[] = []

    // TODO: Refactor, Kulla's suggestion:
    // You have a duplication of this line in your code in both the if and the else part -> I would do the following:
    // 1) Create the body for each data,
    // 2) group by user_id and
    // 3) aggregate the bodies by concatenating the strings ->
    // You can archive this already in the SQL so you get an array of events per user...
    for (const data of emailData) {
      const email = emailPayload.find(
        (x: { user_id: number }) => x.user_id == data.user_id
      )
      if (email) {
        email.body = `${email.body}<p>${data.actor_name} ${
          eventMessages[data.event_id as EventType]
        } ${formattedDate(data.date)}</p><br/>`
        email.ids.push(data.id)
      } else {
        emailPayload.push({
          user_id: data.user_id,
          username: data.username,
          email: data.email,
          ids: [data.id],
          body: `<p>${data.actor_name} ${
            eventMessages[data.event_id as EventType]
          } ${formattedDate(data.date)}</p><br/>`,
        })
      }
    }
    return emailPayload
  } catch (ex) {
    /* eslint-disable-next-line no-console */
    console.log(ex)
  }
}

export async function sendEmailToUser(): Promise<
  [EmailPayload[] | null, unknown]
> {
  try {
    const emailData = await getAllUnsentEmailData()
    if (!emailData) {
      return [null, null]
    }

    const emailPayloads = filterDataForEmail(emailData)
    if (!emailPayloads) {
      return [null, null]
    }

    for (const payload of emailPayloads) {
      const mailStatus: string = await sendMail(
        payload.username,
        payload.email,
        payload.body
      )

      if (mailStatus == '250 Ok') {
        await updateNotificationSendStatus(payload.ids)
      } else {
        throw new Error(`Email receiver responded with status ${mailStatus}`)
      }
    }

    return [emailPayloads, null]
  } catch (ex) {
    /* eslint-disable-next-line no-console */
    console.log(ex)
    return [null, ex]
  }
}
