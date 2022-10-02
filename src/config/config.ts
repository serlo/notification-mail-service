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
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT as string),
        secure: false, 
        auth: {
            user: process.env.MAIL_USER, 
            pass: process.env.MAIL_PASSWORD 
        }
    },
    from_email: 'syed.yarooq@serlo.com'
}