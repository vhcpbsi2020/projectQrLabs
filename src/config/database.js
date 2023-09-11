const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemaDeNotas', 'nome_usuario', 'senha_usuario', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
