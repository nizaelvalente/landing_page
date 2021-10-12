const Express = require ('express')
const Rotas = Express.Router()
const agendaController = require ('../controller/agendaController')
const estacaoController = require ('../controller/estacaoController')

Rotas.get('/', agendaController.get)
Rotas.get('/estacao', estacaoController.get)
Rotas.post('/criar', agendaController.create)
Rotas.post('/mesa', estacaoController.create)

module.exports = Rotas