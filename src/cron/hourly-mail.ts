import * as cron from 'node-cron';
import {sendEmailToUser} from '../services/mail-service'

cron.schedule('0 * * * *', () => {
    console.log("^^ HOURLY MAIL LOG  ^^")
    sendEmailToUser();
});
