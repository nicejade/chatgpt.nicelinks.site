import Fastify from 'fastify'
import * as dotenv from 'dotenv'
// Fix Bug: [fetch is not defined](Ubuntu16 Cannot Upgrade Node to v18.*)
import 'isomorphic-fetch'
import { ChatGPTAPI } from 'chatgpt'

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
  return {
    apiKey: key || process.env.OPEN_AI_KEY,
    completionParams: {
      model: 'gpt-3.5-turbo',
    }
  }
}

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world ! 🎉' })
})

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
    fastify.listen({
      port: 8000,
      host: '0.0.0.0'
    }, (err, address) => {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
      fastify.log.info(`server listening on ${address}`)
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()