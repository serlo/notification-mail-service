import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

export const config = {
  serloApi: {
    graphqlUrl: process.env.SERLO_API_GRAPHQL_URL,
    sharedSecret: process.env.SERLO_API_NOTIFICATION_EMAIL_SERVICE_SECRET,
  },
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string, 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },
  fromEmail: process.env.FROM_EMAIL || 'notifications@mail.serlo.org',
}

export const domain = 'https://serlo.org'
