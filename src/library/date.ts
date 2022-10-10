import moment from 'moment'

export const formattedDate = (date: Date) => {
  return moment(date).format('YYYY-MM-DD HH:mm')
}
