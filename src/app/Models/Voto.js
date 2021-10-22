const mongoose = require('mongoose');


const Voto = mongoose.Schema(
  { name : { type: String, required: true },
    escolha : { type: String, required: true },
        
  },
  { 
    timestamps: true,
  }
)

module.exports = mongoose.model('voto', Voto)