export default async (fastify) => {
  const rateLimitOptions = {
    max: 3,
    timeWindow: '1 minute'
  }

  return await fastify.register(import('@fastify/rate-limit'), rateLimitOptions)
    .register(import('./routes/chatgpt'))
    .ready(err => {
      if (err) console.log(`Something Error @Start：${err}`,)
      console.log('万事俱备，风起云涌.')
    })
}