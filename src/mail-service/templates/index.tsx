import moment from 'moment'

export * from './components/notification-mail'

export const domain = 'https://serlo.org'

// TODO: investigate if we need it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function formattedDate(date: Date) {
  return moment(date).format('YYYY-MM-DD HH:mm')
}
