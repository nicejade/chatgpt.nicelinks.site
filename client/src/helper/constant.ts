export const TITLE = '素问智聊斋'

export const OPEN_AI_KEY = 'open-ai-key'
export const PARENT_MSG_ID = 'parent-msg-id'
export const IS_SAVE_CHAT = 'is-save-chat'
export const CHAT_RECORD = 'chat-record'

export const FEEDBACK_PATH = 'https://nicelinks.site/post/63fdeb37fe46ca437e0aa780?ref=chatgpt.nicelinks.site'

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

export const SYSTEM_NOTICE_MAP = [
  {
    id: '230401',
    title: '系统公告',
    date: '2023 年 4 月 1 日 18 时',
    body: '尊敬的用户，2023 年 4 月 1 日 11 时，<a href="https://chatgpt.nicelinks.site/">素问智聊斋</a> 后台调用 Open AI 接口出现不可抗力错误（Error：429），给您带来的不便，深感抱歉（如果您拥有自己的 API KEY，可在<a href="/#/setting">设置</a>页填写，不影响使用）；解决该问题，须要联系 Open AI 官方，预计 4 月 5 日可修复，请耐心等待⌛️。<br/> <br/> 再次感到抱歉（于 #DATE）。',
    buttonText: '已知悉',
  }
]

export const ERROR_MSG_MAP = {
  noPromptFilled: '请输入您想与人工智能进行交流的内容.',
  promptOverLimit: '您输入的 Prompt Text 长度超限制.',
  requestInProgress: '您已发出的指令正在进行中，请稍后片刻.',
}