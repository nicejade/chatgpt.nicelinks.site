import { OPEN_AI_KEY, PARENT_MSG_ID } from './constant'
import { getLocalStorage, setLocalStorage } from './utils'

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
