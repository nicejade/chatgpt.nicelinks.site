import Fastify from 'fastify'
import { ChatGPTAPI } from 'chatgpt'
import fetch from 'node-fetch'

const fastify = Fastify({
  logger: true
})

// Fix Bug: [fetch is not defined](Ubuntu16 Cannot Upgrade Node to v18.*)
global.fetch = fetch

const userWorkerPool: object = {}
interface BodyConf {
  key: string,
  text: string,
  id: string,
  time: number,
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
  const api = new ChatGPTAPI({
    apiKey: key,
  })
  userWorkerPool[key] = {
    api,
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