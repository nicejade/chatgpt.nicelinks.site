import { ChatGPTAPI } from 'chatgpt'

export default (fastify, opts, next) => {
  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world ! 🎉' })
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

  next()
}