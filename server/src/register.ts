import helmet from '@fastify/helmet'

export default async (fastify) => {
  const rateLimitOptions = {
    max: 5,
    ban: 2,
    timeWindow: 1000 * 60 * 60 * 6
  }

  return await fastify.register(import('@fastify/rate-limit'), rateLimitOptions)
    .register(helmet, { global: true })
    .register(import('./routes/chatgpt'))
    .ready(err => {
      if (err) console.log(`Something Error @Start：${err}`,)
      console.log('万事俱备，风起云涌.')
    })
}