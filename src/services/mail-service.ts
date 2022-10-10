import { getAllUnsentEmailData,updateNotificationSendStatus } from "../db/dbQuery"
import { sendMail } from "../library/mail"
import { formatedDate } from "../library/date"
import { EVENT_TYPE, eventMessages } from "../constants/email-message"
import { EmailData, EmailPayload } from "../types"

export const sendEmailToUser = async () => {
    try {
      const emailData = await getAllUnsentEmailData();
      if (!emailData) return [null, null];
      let emailPayload =await filterDataForEmail(emailData);
      if (!emailPayload) return [null, null];
      for(let payload of emailPayload) {
        let mailStatus: string = await sendMail(payload.username, payload.email, payload.body);
        
        if(mailStatus == '250 Ok'){
          let notification_ids = payload.ids.join();
          notification_ids = notification_ids.replace("'", " ");
          await updateNotificationSendStatus(notification_ids)

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
    let emailPayload :EmailPayload[] = [];

    for(let data of emailData) {
      let isExist = emailPayload.find((x: { user_id: number; })=> x.user_id == data.user_id);
      if(!isExist) {
        emailPayload.push({
          user_id: data.user_id,
          username : data.username, 
          email: data.email, 
          ids : [data.id],
          body: `<p>${data.actor_name} ${eventMessages[data.event_id as EVENT_TYPE]} ${formatedDate(data.date)}</p><br/>` 
        })
      }else{
          isExist.body = isExist.body + `<p>${data.actor_name} ${eventMessages[data.event_id as EVENT_TYPE]} ${formatedDate(data.date)}</p><br/>`;
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
