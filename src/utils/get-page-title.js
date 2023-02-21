import defaultSettings from '@/settings'

const title = defaultSettings.title || '星网'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
