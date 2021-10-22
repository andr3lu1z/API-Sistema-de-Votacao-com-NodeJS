const Pauta = require('../Models/Pauta');
const yup = require('yup');

class PautaController {
  show(req, res) {
    var pautas = ["pauta 1", "Pauta 2", "Pauta 3"]
    return res.status(200).json({
      error: false,
      pautas
    })
  }

  async store(req, res) {

    /**
     * Validação via YUP schema
     * Início
     */
    let schema = yup.object().shape({
      titulo: yup.string().required(),
      numero: yup.string().required(),
      dataVoto: yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({
        error: true,
        message: "Dados inválidos"
      })
    }

     /**
     * Validação via YUP schema
     * fim
     */

    /**
     * Validação no banco de dados
     * Verifica se a pauta já existe
     */

    let pautaExist = await Pauta.findOne({ numero: req.body.numero });
    if(pautaExist) {
      return res.status(400).json({
        error: true,
        message: "Esta Pauta já foi cadastrada!"
      })
    }

     /**
      * Desestrutuação dos dados da requisição
      */
    const { titulo, numero, dataVoto} = req.body;

    /**
      * criação da constante data
      */
    
    const data = { titulo, numero, dataVoto };

   
    /**
      * Inserção no banco de dados 
      */

    await Pauta.create(data, (err) => {
      if(err) return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir pauta no MongoDB"
        })

        return res.status(200).json({
          error: false,
          message: "Pauta Cadastrada com sucesso"
        })
    })
  }
}

module.exports = new PautaController();