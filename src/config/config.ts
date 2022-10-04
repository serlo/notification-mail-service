import dotenv from 'dotenv';
dotenv.config();
import { RADIX_TYPE } from '../constants/enums'

export default {
    api: {
        port: process.env.PORT
    },
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT as string, RADIX_TYPE.DECIMAL),
        secure: false, 
        auth: {
            user: process.env.MAIL_USER, 
            pass: process.env.MAIL_PASSWORD 
        }
    },
    from_email: process.env.FROM_EMAIL
}