const mongoose = require ('mongoose')

const agendaSchema = new mongoose.Schema(
    {
        nome: {type: String, required:true},
        filial:{type: String, required:true},
        estacao: {type: String, required: true},
        data: {type: Date, required: true},
    },
    {timestamps: true}
)

mongoose.model("agendaSchema", agendaSchema)