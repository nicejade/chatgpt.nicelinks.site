import Fastify from 'fastify'
import * as dotenv from 'dotenv'
// Fix Bug: [fetch is not defined](Ubuntu16 Cannot Upgrade Node to v18.*)
import 'isomorphic-fetch'
import { ChatGPTAPI } from 'chatgpt'
import { SocksProxyAgent } from 'socks-proxy-agent'

dotenv.config()

const fastify = Fastify({
  logger: true
})
const userWorkerPool: object = {}
interface BodyConf {
  key?: string,
  text?: string,
  id?: string,
  time?: number,
}

const genRequestOption = (key: string) => {
  const agent = new SocksProxyAgent({
    hostname: process.env.SOCKS_PROXY_HOST,
    port: process.env.SOCKS_PROXY_PORT,
  })
  return {
    apiKey: key,
    completionParams: {
      model: 'gpt-3.5-turbo',
    },
    fetch: (url: string, options) => {
      return fetch(url, { agent, ...options })
    },
  }
}

fastify.post('/api/requestChatGPT', async (request, reply) => {
  const body: BodyConf = request.body
  const { key, text, id } = body
  const currentTime = (new Date()).getTime()
  if (userWorkerPool[key]) {
    const api = userWorkerPool[key].api
    userWorkerPool[key].time = currentTime
    return await api.sendMessage(text, {
      parentMessageId: id
    })
  }

  const options = genRequestOption(key)
  const api = new ChatGPTAPI(options)
  userWorkerPool[key] = {
    api: api,
    time: currentTime
  }
  return await api.sendMessage(text)
})

const start = async () => {
  try {
    await fastify.listen({ port: 6666 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()