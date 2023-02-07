declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERLO_API_GRAPHQL_URL: string

      SERLO_API_NOTIFICATION_EMAIL_SERVICE_SECRET: string

      DB_URI: string

      SMTP_URI: string

      FROM_EMAIL: string
    }
  }
}

export {}
