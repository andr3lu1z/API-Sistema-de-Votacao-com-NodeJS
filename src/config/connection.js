const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB();
  }

  dataBaseConnectionMongoDB(){
    this.mongoDBConnection = mongoose.connect("mongodb+srv://root:MIg98gswzBEOtZnQ@cluster0.pozq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      console.log("Conexão estabelecida com o MongoDB");
    })
    .catch((error) => {
      console.log(`Erro ao estabelecer conexão com mongoDB: ${error}`)
    })
  }
}

module.exports = new Connection();