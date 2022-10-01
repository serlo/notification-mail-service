import { getAllUnsentEmailData,updateNotificationSendStatus } from "../db/dbQuery"
import { sendMail } from "../library/mail"

export const sendEmailToUser = async () => {
    try {

      const emailData: any= await getAllUnsentEmailData();
      
      for(let data of emailData) {
        let mailStatus: any = await sendMail(data.username, data.email, data.event_id);
        
        if(mailStatus?.response == '250 Ok')
          await updateNotificationSendStatus(data.id)
      }

        return [true, null];
    } catch (ex) {
        console.log(ex)
        return [null, ex];
    }
}

export default {
  sendEmailToUser,
};
