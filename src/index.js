require('./schemas/agendaSchema')
require('./schemas/estacaoSchema')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect("mongodb+srv://landingpage:landingpage@cluster0.5eefw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    app.use('/', require('./routers/index.js'))

    app.listen(process.env.PORT || 3000, () => console.log('servidor rodando na porta 3000'))
  })

