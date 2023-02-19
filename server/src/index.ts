'use strict'

import Hapi from '@hapi/hapi'
import { ChatGPTAPI } from 'chatgpt'

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello, world!1222'
  },
})

// const api = new ChatGPTAPI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
