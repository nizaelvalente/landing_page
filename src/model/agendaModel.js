//são paulo
const mongoose = require('mongoose')
const agendaSchema = mongoose.model("agendaSchema")

module.exports = {

    async create(newScheduling) {
        newScheduling.data = `${newScheduling.data}T08:00:00.000Z`

        const controllerEstacao = await agendaSchema.find({
            filial: newScheduling.filial,
            estacao: newScheduling.estacao,
            data: newScheduling.data,
        })

        if (controllerEstacao.length) {
            return { status: 400, data: 'Estação de trabalho não disponível' }
        }

        const controllerEspediente = await agendaSchema.find({
            nome: newScheduling.nome,
            data: newScheduling.data,
        })

        if (controllerEspediente.length) {
            return { status: 400, data: 'Voce ja tem um agendamento para essa data' }
        }

        const controller = await agendaSchema.find({
            filial: newScheduling.filial,
            data: newScheduling.data,
        })

        if (controller.length < 4) {
            const scheduling = await agendaSchema.create(newScheduling)
            return { status: 200, data: scheduling }
        }
        return { status: 400, data: 'Data não disponivel' }
    },

    async get() {

        const schedulingsAll = await agendaSchema.find().lean()
        schedulingsAll.forEach(e => {
            e.dataLabel = e.data.toLocaleDateString()
        })
        return (schedulingsAll)
    }
}