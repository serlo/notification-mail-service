const transporter = {
  sendMail: () => 'sent',
}

function nodemailer() {
  async function createTransport(mail: any) {
    return transporter
  }
}
