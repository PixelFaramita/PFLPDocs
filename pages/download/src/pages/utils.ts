export function formatDate(dates: string) {
  const oneMin = 60 * 1000
  const oneHrs = 60 * oneMin
  const oneDay = 24 * oneHrs
  var date = new Date(dates)
  if (Date.now() - date.getTime() < oneDay) {
    const minLeft = Math.floor(((Date.now() - date.getTime()) / oneMin) % 60)
    return (
      Math.floor((Date.now() - date.getTime()) / oneHrs) +
      '小时' +
      (minLeft == 0 ? '' : minLeft + '分钟') +
      '前'
    )
  }
  //if less than 7 days ,show * days and * hrs ago
  if (Date.now() - date.getTime() < 7 * oneDay) {
    const hrsLeft = Math.floor(((Date.now() - date.getTime()) / oneHrs) % 24)
    return (
      Math.floor((Date.now() - date.getTime()) / oneDay) +
      '天' +
      (hrsLeft == 0 ? '' : hrsLeft + '小时') +
      '前'
    )
  }
  return date.toLocaleString('zh-CN', {
    hour12: false
  })
}
