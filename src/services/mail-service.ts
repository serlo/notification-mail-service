import { getAllUnsentEmailData,updateNotificationSendStatus } from "../db/dbQuery"
import { sendMail } from "../library/mail"
import { formattedDate } from "../library/date"
import { EVENT_TYPE, eventMessages } from "../constants/email-message"
import { EmailData, EmailPayload } from "../types"

export const sendEmailToUser = async () => {
    try {
      const emailData = await getAllUnsentEmailData();
      if (!emailData) return [null, null];

      const emailPayload = await filterDataForEmail(emailData);
      if (!emailPayload) return [null, null];

      for(const payload of emailPayload) {
        const mailStatus: string = await sendMail(payload.username, payload.email, payload.body);
        
        if (mailStatus == '250 Ok') {
          await updateNotificationSendStatus(payload.ids)
        } else {
          throw new Error(`Email receiver responded with status ${mailStatus}`)
        }
      }

      return [emailPayload, null];
    } catch (ex) {
        console.log(ex)
        return [null, ex];
    }
}

export const filterDataForEmail = async (emailData: EmailData[]) => {
  try {
    const emailPayload: EmailPayload[] = [];

    // TODO: Refactor, Kulla's suggestion:
    // You have a duplication of this line in your code in both the if and the else part -> I would do the following: 
    // 1) Create the body for each data, 
    // 2) group by user_id and 
    // 3) aggregate the bodies by concatenating the strings -> 
    // You can archive this already in the SQL so you get an array of events per user...
    for(const data of emailData) {
      const isExist = emailPayload.find((x: { user_id: number; })=> x.user_id == data.user_id);
      if(!isExist) {
        emailPayload.push({
          user_id: data.user_id,
          username : data.username, 
          email: data.email, 
          ids : [data.id],
          body: `<p>${data.actor_name} ${eventMessages[data.event_id as EVENT_TYPE]} ${formattedDate(data.date)}</p><br/>` 
        })
      } else {
          isExist.body = isExist.body + `<p>${data.actor_name} ${eventMessages[data.event_id as EVENT_TYPE]} ${formattedDate(data.date)}</p><br/>`;
          isExist.ids.push(data.id);
      }
    }
    return emailPayload;
  } catch (ex) {
      console.log(ex)
  }
}

export default {
  sendEmailToUser,
};
