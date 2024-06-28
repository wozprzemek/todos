import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'

async function db(fastify, options) {
    fastify.register(fastifyMongo, {
        url: 'mongodb://mongo:27017/todo'
    })
}

export default fastifyPlugin(db)
