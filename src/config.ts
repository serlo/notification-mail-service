import dotenv from 'dotenv'

dotenv.config()

export const config = {
  serloApi: {
    graphqlUrl: process.env.SERLO_API_GRAPHQL_URL,
    sharedSecret: process.env.SERLO_API_NOTIFICATION_EMAIL_SERVICE_SECRET,
  },
  dbUri: process.env.DB_URI,
  smtpUri: process.env.SMTP_URI,
  fromEmail: process.env.FROM_EMAIL || 'notifications@mail.serlo.org',
}
