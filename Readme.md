# APIControlNotes

## Descrição

Este é um projeto de implementação simples de uma API para criar, editar, listar e atualizar notas, com seu conteúdo, carimbo de hora e id.
Sera utlizado Node.js em adjunto com o nodemom para facilitar a atualização das modificações sem precisar está realizando a reinialização manual, o banco de dados será o Mysql e o ORM escolhido foi o Sequelize

## Instalação

Para instalar este projeto, siga estas etapas:

1. Clone o repositório: `git clone `
2. Entre no diretório do projeto: `cd ProjetoQrLabs`
3. Instale o npm: `npm install`

## Codigos importantes

Configuração da database:
`const Sequelize = require('sequelize');`

`const sequelize = new Sequelize('sistemaDeNotas', 'victo_hugo', '12345678', {`
  `host: 'localhost',`
  `dialect: 'mysql'`
`});`

`module.exports = sequelize;`


## Uso

Depois de instalar o projeto, você pode executá-lo com o comando: `yarn dev`



## Licença

Este projeto está licenciado sob a licença MIT.
