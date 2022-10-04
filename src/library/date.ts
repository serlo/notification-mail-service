import moment from 'moment';


export const formatedDate = (date : Date) => {
    return moment(date).format('YYYY-MM-DD HH:mm')
}