import { createTransport } from 'nodemailer'

const transporter = {
  sendMail: () => 'sent',
}

function nodemailer() {
  createTransport()

  return transporter
}
