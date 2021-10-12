//são paulo
const agendaModel = require('../model/agendaModel')

module.exports = {

    async create(req, res) {
        const data = await agendaModel.create(req.body)
            return res.send(data)
    },
    
    async get(req, res) {
        const data = await agendaModel.get()
        return res.send(data)
    },



}