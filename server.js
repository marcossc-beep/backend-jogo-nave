import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify()

server.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

const lista = []

server.get('/usuarios', () => {
    return 'Olá mundo!'
})

server.get('/personagem', () => {
    return lista
})

server.post('/personagem', (req, reply) => {
    let valido = true;
    for (let index in lista) {
        if (req.body.nome === lista[index].nome) {
            valido = false
            break
        }
    }
    if (valido) {
        lista.push(req.body)
        return 'Deu certo!'
    } else {
        return 'já existe um ' + req.body.nome
    }
})

server.put('/personagem/:nome', (req, reply) => {
    const nome = req.params.nome;

    let valido = false;
    for (let index in lista) {
        if (nome === lista[index].nome) {
            lista[index] = req.body;
            break
        }
    }

    return lista
})

server.delete('/personagem/:nome', (req, reply) => {
    const nome = req.params.nome;
    
    for (let index in lista) {
        if (nome === lista[index].nome) {
            lista.splice(index, 1)
            break
        }
    }

    reply.status(201).send({message: 'Personagem deletado!'})
})

server.listen(
    {port: 3000}
)