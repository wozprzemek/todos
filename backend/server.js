// ESM
import Fastify from 'fastify'
import db from './db.js'
import routes from './routes.js'
import cors from '@fastify/cors'

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
    logger: true
})
fastify.register(db)
fastify.register(routes)

await fastify.register(cors, {
    origin: '*',
})

fastify.listen({ host: '0.0.0.0', port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})