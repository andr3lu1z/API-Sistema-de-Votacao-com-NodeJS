const mongoose = require('mongoose');


const Pauta = mongoose.Schema(
  {
    titulo : { type: String, required: true },
    numero : { type: String, required: true },
    dataVoto : { type: String, required: true }
  },
  { 
    timestamps: true,
  }
)

module.exports = mongoose.model('pauta', Pauta)