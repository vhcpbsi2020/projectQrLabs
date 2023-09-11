const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemaDeNotas', 'victo_hugo', '12345678', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
