import { marked } from 'marked'
import { getLocalStorage, setLocalStorage } from './utils'
import { TITLE, ROUTE_TITME_MAP, OPEN_AI_KEY, PARENT_MSG_ID, IS_SAVE_CHAT, CHAT_RECORD } from './constant'

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

export const setPageMeta = (route: string) => {
  const title: string = ROUTE_TITME_MAP[route]
  window.document.title = title ? `${title} - ${TITLE}` : TITLE
}

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

export const setIsSaveChat = (val: boolean) => {
  setLocalStorage(IS_SAVE_CHAT, val)
}

export const getIsSaveChat = () => {
  return getLocalStorage(IS_SAVE_CHAT)
}

export const setChatRecord = (obj: object) => {
  const chatRecordArr = getLocalStorage(CHAT_RECORD) || []
  chatRecordArr.push(obj)
  setLocalStorage(CHAT_RECORD, JSON.stringify(chatRecordArr))
}

export const getChatRecord = () => {
  return getLocalStorage(CHAT_RECORD)
}