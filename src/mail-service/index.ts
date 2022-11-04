import { formattedDate } from '../utils'
import { getAllUnsentEmailData, updateNotificationSendStatus } from './db-query'
import { EventType, eventMessages } from './email-message'
import { sendMail } from './mail'
import { EmailData, EmailPayload } from './types'

export const filterDataForEmail = (emailData: EmailData[]) => {
  const emailPayload: EmailPayload[] = []

  emailData.forEach(data => {
    let body = ''
    data.actor_names.forEach((actor, i) => {
      body = `${body}<p>${actor} ${
          eventMessages[data.event_ids[i] as EventType]
      } ${formattedDate(data.dates[i])}</p><br/>`
    })
    emailPayload.push({
      user_id: data.user_id,
      username: data.username,
      email: data.email,
      ids: data.notification_ids,
      body
    })
  })

  return emailPayload
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
