'use strict'

const mongoose = require('mongoose')
const app = require('./app')
mongoose.Promise = global.Promise

const config = require('./config')

mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost: ${config.port}`)
  })
})
