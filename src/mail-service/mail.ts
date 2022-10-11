import nodemailer from 'nodemailer'
import config from '../config'

const transporter = nodemailer.createTransport(config.mail)

interface MailResponse {
  response: string
}

export const sendMail = async (
  username: string,
  userEmail: string,
  body: string
) => {
  try {
    const info: MailResponse = await transporter.sendMail({
      from: config.from_email,
      to: userEmail,
      subject: 'notification Email From Serlo',
      html: `<p>Hello ${username}</p>
          <br/>
          ${body}
          <br/>
          Regards<br/>
          <span>Team</span>`,
    })

    return info.response
  } catch (ex) {
    console.log(ex)
    return 'something went wrong'
  }
}
