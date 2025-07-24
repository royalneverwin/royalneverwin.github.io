import { format, parseISO } from 'date-fns'

export function formatDate(dateString: string): string {
  const date = parseISO(dateString)
  return format(date, 'yyyy年MM月dd日')
}

export function formatDateShort(dateString: string): string {
  const date = parseISO(dateString)
  return format(date, 'MM-dd')
}

export function getRelativeDate(dateString: string): string {
  const date = parseISO(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) {
    return '1天前'
  } else if (diffDays < 30) {
    return `${diffDays}天前`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months}个月前`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years}年前`
  }
}
