# APIControlNotes

## Descrição

Este é um projeto de implementação simples de uma API para criar, editar, listar e atualizar notas, com seu conteúdo, carimbo de hora e id.
Sera utlizado Node.js em adjunto com o nodemom para facilitar a atualização das modificações sem precisar está realizando a reinialização manual, o banco de dados será o Mysql e o ORM escolhido foi o Sequelize.

## Instalação

Para instalar este projeto, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/vhcpbsi2020/projectQrLabs `
2. Entre no diretório do projeto: `cd ProjetoQrLabs`
3. Instale o npm: `npm install`

## Uso

Depois de instalar o projeto, você pode executá-lo com o comando: `yarn dev`
Utilize ferramentas como Posteman para testar as funcionalidades:

### Comandos API:
 #### POST CREATE: `http://localhost:3001/notes/`
 #### POST DELETE: `http://localhost:3001/notes/id`
 #### GET LIST: `http://localhost:3001/notes/`
 #### PUT UPDATE: `http://localhost:3001/notes/id`

## Codigos importantes

### Configuração da database:

```
const Sequelize = require('sequelize');

//configurando as informações de autenticação e tipo do banco de dados:
const sequelize = new Sequelize('sistemaDeNotas', 'victo_hugo', '12345678', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

```
### Criando o modelo da nota:
```
const Sequelize = require('sequelize');
const sequelize = require('./database'); // importando o banco de dados para a variavel sequelize

const Note = sequelize.define('Note', {
  //criando o paramentro id:
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  //criando o parametro do conteudo:  
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
  //criando o parametro do carimbo da nota:
    creat: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

// realizando a sincronização com o banco de dados:
sequelize.sync();

module.exports = Note;
```

## Licença

Este projeto está licenciado sob a licença ISC.
