export function formatDate(dates: string) {
  var date = new Date(dates)
  if (Date.now() - date.getTime() < 24 * 60 * 60 * 1000) {
    return (
      Math.floor((Date.now() - date.getTime()) / (60 * 60 * 1000)) +
      '小时' +
      Math.floor(((Date.now() - date.getTime()) / (60 * 1000)) % 60) +
      '分钟前'
    )
  }
  //if less than 7 days ,show * days and * hrs ago
  if (Date.now() - date.getTime() < 7 * 24 * 60 * 60 * 1000) {
    return (
      Math.floor((Date.now() - date.getTime()) / (24 * 60 * 60 * 1000)) +
      '天' +
      Math.floor(((Date.now() - date.getTime()) / (60 * 60 * 1000)) % 24) +
      '小时前'
    )
  }
  return date.toLocaleString('zh-CN', {
    hour12: false
  })
}
