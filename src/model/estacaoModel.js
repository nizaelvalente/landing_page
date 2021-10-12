//são paulo
const mongoose = require('mongoose')
const estacaoSchema = mongoose.model("estacaoSchema")

module.exports = {

    async create(da) {
        const mesa = await estacaoSchema.create(da)
        return { status: 200, data: mesa }
    },



    async get() {
        const estacoes = await estacaoSchema.find({
            deleted: false
        })
        return (estacoes)
    }
}