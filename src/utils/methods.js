/*
 * @Author: lxj
 * @Date: 2021-09-03 09:09:00
 */
export function downloadUrlArrFile(pathArr) {
  for (let i = 0; i < pathArr.length; i++) {
    const a = document.createElement('a')
    a.setAttribute('download', '')
    a.setAttribute('href', pathArr[i])
    a.setAttribute('target', '_blank')
    a.click()
  }
}

export function formatTime(timeStr) {
  switch (timeStr) {
    case 'year':
      return '年'
    case 'quarter':
      return '季'
    case 'month':
      return '月'
    case 'week':
      return '周'
    case 'day':
      return '日'
    case 'hour':
      return '时'
    case 'min':
      return '分'
  }
}

/**
 * 字节大小格式化
 * @param value
 * @returns {string|*}
 */
export function kbFormat(value) {
  if (value < 1024) return value + 'B'
  if (value >= Math.pow(2, 10) && value < Math.pow(2, 20)) {
    return Math.floor((value / 1024)) + 'KB'
  } else if (value >= Math.pow(2, 20) && value < Math.pow(2, 30)) {
    return Math.floor((value / Math.pow(1024, 2))) + 'MB'
  } else if (value >= Math.pow(2, 30) && value < Math.pow(2, 40)) {
    return Math.floor((value / Math.pow(1024, 3))) + 'GB'
  } else if (value >= Math.pow(2, 40) && value < Math.pow(2, 50)) {
    return Math.floor((value / Math.pow(1024, 4))) + 'TB'
  } else if (value >= Math.pow(2, 50) && value < Math.pow(2, 60)) {
    return Math.floor((value / Math.pow(1024, 5))) + 'PB'
  } else if (value >= Math.pow(2, 60) && value < Math.pow(2, 70)) {
    return Math.floor((value / Math.pow(1024, 6))) + 'EB'
  }
  return value
}
