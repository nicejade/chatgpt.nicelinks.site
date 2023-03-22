export const TITLE = '素问智聊斋'

export const OPEN_AI_KEY = 'open-ai-key'
export const PARENT_MSG_ID = 'parent-msg-id'
export const IS_SAVE_CHAT = 'is-save-chat'
export const CHAT_RECORD = 'chat-record'

export const APP_CONF_ARR = [
  {
    title: '🎭 与 AI 对话 🎉',
    path: '/chat',
    desc: '无需注册账号，零配置，即可与 ChatGPT（模型：gpt-3.5-turbo-0301）畅聊。',
    enable: true,
  },
  {
    title: '🦚 润色您的文案',
    path: '/polish',
    desc: '仅提供内容，借助 ChatGPT，一键润色，使得您的文案措辞用语更上一层楼。',
    enable: true,
  },
  {
    title: '🎁 智能挑选礼物',
    path: '/gift',
    desc: '提供对方兴趣、年龄以及与您的关系，借助 ChatGPT 为您挑选最为契合的礼物。',
    enable: false,
  },
]

export const ROUTE_TITME_MAP = {
  '/chat': '与 AI 对话',
  '/polish': '润色文案',
  '/record': '聊天记录',
  '/setting': '个人设置',
}