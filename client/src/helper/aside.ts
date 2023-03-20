import { marked } from 'marked'
import { OPEN_AI_KEY, PARENT_MSG_ID } from './constant'
import { getLocalStorage, setLocalStorage } from './utils'

const renderer = new marked.Renderer()
const linkRenderer = renderer.link
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text)
  return html.replace(/^<a /, '<a target="_blank" rel="noopener" ')
}

marked.setOptions({
  renderer,
  sanitize: false,
})

export const parse = marked.parse

export const getOpenAiKey = () => {
  return getLocalStorage(OPEN_AI_KEY)
}

export const setOpenAiKey = (val: string) => {
  setLocalStorage(OPEN_AI_KEY, val)
}

export const setParentMessageId = (val: string) => {
  setLocalStorage(PARENT_MSG_ID, val)
}

export const getParentMessageId = () => {
  return getLocalStorage(PARENT_MSG_ID)
}

