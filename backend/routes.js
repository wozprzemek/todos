import { ObjectId } from '@fastify/mongodb'

const taskBodyJsonSchema = {
    type: 'object',
    required: ['title', 'is_completed'],
    properties: {
        title: { type: 'string' },
        is_completed: { type: 'boolean' },
    },
}

const schema = {
    body: taskBodyJsonSchema,
}

async function routes(fastify, options) {
    const tasks = fastify.mongo.db.collection('tasks')

    fastify.get('/tasks', async (request, reply) => {
        const result = await tasks.find().toArray()
        return result
    })

    fastify.post('/tasks', { schema }, async (request, reply) => {
        const result = await tasks.insertOne({ ...request.body })
        return result
    })

    fastify.patch('/tasks/:id', async (request, reply) => {
        const id = new ObjectId(request.params.id);
        const result = await tasks.updateOne(
            { "_id": id },
            { "$set": { ...request.body } },
        )
        if (result.length === 0) {
            reply.status(404).send('Task not found')
        }
        return result
    })

    fastify.delete('/tasks/:id', async (request, reply) => {
        const id = new ObjectId(request.params.id);
        const result = await tasks.deleteOne(
            { "_id": id },
        )
        if (result.length === 0) {
            reply.status(404).send('Task not found')
        }
        if (!result) {
            throw new Error('Invalid value')
        }
        return result
    })
}

export default routes;