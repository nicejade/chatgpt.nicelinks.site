import Fastify from 'fastify'
import * as dotenv from 'dotenv'
// Fix Bug: [fetch is not defined](Ubuntu16 Cannot Upgrade Node to v18.*)
import 'isomorphic-fetch'
import * as register from './register'

dotenv.config()

const fastify = Fastify({
  logger: true
})

const start = async () => {
  try {
    await register.default(fastify)
    const address = await fastify.listen({
      port: 8000,
      host: '0.0.0.0'
    })
    fastify.log.info(`server listening on ${address}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()