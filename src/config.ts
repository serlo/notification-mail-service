import dotenv from 'dotenv'

export const domain = 'https://serlo.org'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

function createConfig() {
  if (
    !process.env.SERLO_API_GRAPHQL_URL ||
    !process.env.SERLO_API_NOTIFICATION_EMAIL_SERVICE_SECRET ||
    !process.env.DB_URI ||
    !process.env.SMTP_URI
  ) {
    throw new Error('Check for missing env var')
  }
  return {
    serloApi: {
      graphqlUrl: process.env.SERLO_API_GRAPHQL_URL,
      sharedSecret: process.env.SERLO_API_NOTIFICATION_EMAIL_SERVICE_SECRET,
    },
    dbUri: process.env.DB_URI,
    smtpUri: process.env.SMTP_URI,
    fromEmail: process.env.FROM_EMAIL ?? 'notifications@mail.serlo.org',
  }
}

export const config = createConfig()
