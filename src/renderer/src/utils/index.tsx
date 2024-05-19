import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classes: ClassValue[]): ReturnType<typeof twMerge> => {
  return twMerge(clsx(...classes))
}

export const dateFormate = new Intl.DateTimeFormat(window?.context?.locale || 'en-US', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number): string => {
  return dateFormate.format(ms)
}
