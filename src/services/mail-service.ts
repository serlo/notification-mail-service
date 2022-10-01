import nodemailer from "nodemailer";
import config from "../config/config"


export const getEmailService = async () => {
    try {
        const transporter = nodemailer.createTransport(config.smtp);


          const info = await transporter.sendMail({
            from: config.from_email,
            to: "syed.yarooq@gmail.com",
            subject: "Hello from Yarooq",
            text: "Hello Yarooq?",
            html: "<strong>Hello Yarooq?</strong>",
            headers: { 'x-myheader': 'test header' }
          });
        
          console.log("Message sent: %s", info);

        return [true, null];
    } catch (ex) {
        console.log(ex)
        return [null, ex];
    }
}

export default {
   // getFrontendSrcFolderStructure,
    getEmailService
};

