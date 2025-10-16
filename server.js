import Fastify from 'fastify'

const server = Fastify()

const lista = []

server.get('/usuarios', () => {
    return 'Olá mundo!'
})

server.get('/personagem', () => {
    return lista
})

server.post('/personagem', (req, reply) => {
    lista.push(req.body)
    return 'Deu certo!'
})

server.listen(
    {port: 3000}
)