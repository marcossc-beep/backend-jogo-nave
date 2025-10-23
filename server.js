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

server.put('/personagem/:nome', (req, reply) => {
    const nome = req.params.nome;
// Faça uma lógica para verificar se ja tem um personagem
// Com esse nome. ( DENTRO DO ENDPOINT DO POST )
    let valido = false;
    for (let index in lista) {
        if (nome === lista[index].nome) {
            lista[index] = req.body;
            break
        }
    }

    return lista
})

server.listen(
    {port: 3000}
)