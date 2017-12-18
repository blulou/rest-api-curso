'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productShema = new Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['Computers', 'Phones', 'Accesories'] },
  description: String
})

module.exports = mongoose.model('Product', productShema)
