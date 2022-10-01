import { database } from "./dbConfig";


export const getAllUnsentEmailData =() => {
    try {
        return new Promise((resolve, reject) => {
            database.query('select * from notification where email=true and email_sent=false and seen=false;', function (err, result){
                if (err){
                    console.log("Garden Error: " + err);
                    reject(err);
                }
                 resolve(result)
            })
        })

    }catch (e) {
        console.log("ERROR",e);
        return e;
    }
}