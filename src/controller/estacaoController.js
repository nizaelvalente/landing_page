//são paulo
const estacaoModel = require('../model/estacaoModel')

module.exports = {

    async create(req, res) {
        const data = await estacaoModel.create(req.body)
            return res.send(data)
    },
   
    async get(req, res) {
        const data = await estacaoModel.get()
        return res.send(data)
    },



}