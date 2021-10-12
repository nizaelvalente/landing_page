const mongoose = require ('mongoose')

const estacaoSchema = new mongoose.Schema(
    {
        nome: {type: String, required:true},
        deleted: {type: Boolean, default: false},
    },
    {timestamps: true}
)

mongoose.model("estacaoSchema", estacaoSchema)