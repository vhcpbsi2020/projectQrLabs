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


## Licença

Este projeto está licenciado sob a licença ISC.
