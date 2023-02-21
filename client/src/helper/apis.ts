import $ajax from './ajax'

function requestUrl(path) {
  return `/api/${path}`
}

export default {
  requestChatGPT(data) {
    return $ajax.post(requestUrl('requestChatGPT'), data)
  }
}