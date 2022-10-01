import dotenv from 'dotenv';
dotenv.config();

export default {
    api: {
        port: process.env.PORT
    },
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT as string),
        secure: false, 
        auth: {
            user: process.env.SMTP_USER, 
            pass: process.env.SMTP_PASSWORD 
        }
    },
    from_email: 'syed.yarooq@serlo.com'
}