# Sistema de votação com RESTFull API - NodeJs - ExpressJs - MongoDb.

## Recursos utilizados no desenvolvimento:

- NodeJs;
- Express.Js;
- MongoDb;
- Mongoose;
- NPM;

## Testando a Aplicação no Insominia:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Insomnia](https://insomnia.rest/download).
Após o download do Insomnia, realize os passos abaixo para testar cada API criada.

  ROTA                          |     HTTP(Verbo)   |      Descrição                           | 
--------------------------------| ----------------- | -----------------------------------------| 
/cooperado                      |       GET         | Verifica se está funcionando             | 
/cooperado                      |       POST        | Insere Cooperado na votação              | 
/pauta                          |       GET         | Verifica se está funcionando             | 
/pauta                          |      POST         | Cadastra Pauta                           |


## Executar Localmente

Caso queira executar o projeto em sua máquina local, basta seguir os passos abaixo:

VClone o repositório do projeto em sua máquina e instale as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **NodeJs**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)

### Instalando as Dependências

Abra o terminal e digite a path onde clonou o repositório do projeto:

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Quando estiver na pasta do projeto (raiz), basta digitar no terminal a seguinte instrução:

```
npm install
```

Esse comando irá criar uma nova pasta em seu projeto, como descrito abaixo:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Executando a Aplicação

Bom, agora no terminal onde está aberto o projeto (raiz), basta iniciar o server para o projeto ser executado localmente.

```
node server.js
```

Agora, abra a página da aplicação em `http://localhost:8080/`. E pronto a aplicação será executada de maneira local na sua máquina.

