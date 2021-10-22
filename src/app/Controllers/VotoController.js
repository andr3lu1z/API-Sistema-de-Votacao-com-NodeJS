const Voto = require('../Models/Voto');
const yup = require('yup');

class VotoController {
  show(req, res) {
    var votos = ["Voto 1", "Voto 2", "Voto 3"]
    return res.status(200).json({
      error: false,
      votos
    })
  }

  async store(req, res) {

    /**
     * Validação via YUP schema
     * Início
     */
    let schema = yup.object().shape({
      name: yup.string().required(),
      escolha: yup.string().required(),
      
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({
        error: true,
        message: "Dados inválidos"
      })
    }

     /*** Validação via YUP schema
     * fim */

    /*** Validação no banco de dados
     * Verifica a existência do usuário */

    let votoExist = await Voto.findOne({ name: req.body.name });
    if(votoExist) {
      return res.status(400).json({
        error: true,
        message: "Este cooperado já votou essa pauta!"
      })
    }

     /*** Desestrutuação dos dados da requisição */
    const { name, escolha } = req.body;

    /*** criação da constante data */
    
    const data = { name, escolha };


    /**
      * Inserção no banco de dados 
      */

    await Voto.create(data, (err) => {
      if(err) return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir voto no MongoDB"
        })

        return res.status(200).json({
          error: false,
          message: "Voto registrado com sucesso!"
        })
    })
  }
}

module.exports = new VotoController();