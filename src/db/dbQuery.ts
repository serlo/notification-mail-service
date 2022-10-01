import { database } from "./dbConfig";


export const getAllUnsentEmailData =(email:boolean = true, email_sent:boolean = false, seen:boolean = false) => {
    try {
        return new Promise((resolve, reject) => {
            database.query(`SELECT n.id, n.user_id, u.username, u.email, el.event_id
            FROM notification n
            INNER JOIN user u ON u.id = n.user_id 
            INNER JOIN notification_event ne ON n.id = ne.notification_id
            INNER JOIN event_log el ON el.id = ne.event_log_id
            WHERE n.email=${email} and n.email_sent =${email_sent} and n.seen = ${seen};`
            , function (err, result){
                (err) ? reject(err) : resolve(result)
            })
        })

    }catch (e) {
        console.log("get query error",e);
        return e;
    }
}

export const updateNotificationSendStatus = (notification_id: number) => {
    try {
        return new Promise((resolve, reject) => {
            database.query(`UPDATE notification 
            SET email_sent = true
            WHERE id = ${notification_id};`
            , function (err, result){
                (err) ? reject(err) : resolve(result)
            })
        })

    }catch (e) {
        console.log("update query error",e);
        return e;
    }
}
