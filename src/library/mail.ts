import nodemailer from "nodemailer";
import config from "../config/config"
import {mailText} from "../constants/email-message"

const transporter = nodemailer.createTransport(config.smtp);

export const sendMail = async (username: string, userEmail: string, event_id: number) => {
    try {
        const info = await transporter.sendMail({
          from: config.from_email,
          to: userEmail,
          subject: mailText[event_id-1].subject,
          html: `<p>Hello ${username}</p>
          <br
          ${mailText[event_id-1].body}
          <br>
          <span>Regards</span><br>
          <span>Serlo Team</span>`,
        });
    
        return info;
    } catch (ex) {
        console.log(ex)
        return [null, ex];
    }
}
