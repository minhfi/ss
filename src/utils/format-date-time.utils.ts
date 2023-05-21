import moment from 'moment'
import { FORMAT_DATE_TIME } from 'src/constants'

export const formatSecondsToMinutes = (time: number) => {
  return ('0' + Math.floor(time / 60)) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
}

export const formatDateTime = (
  date: string,
  format = FORMAT_DATE_TIME,
  timeZone?: string
): string => {
  if (timeZone && ['utc', 'UTC'].includes(timeZone)) {
    return moment.utc(date).format(format)
  }

  return moment(date).format(format)
}
