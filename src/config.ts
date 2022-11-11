import dotenv from 'dotenv'

dotenv.config()

export const config = {
  serloApiGraphqlUrl: process.env.SERLO_API_GRAPHQL_URL,
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT as string, 10),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  },
  fromEmail: process.env.FROM_EMAIL || 'notifications@mail.serlo.org',
}
