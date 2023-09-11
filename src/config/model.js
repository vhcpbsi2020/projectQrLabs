const Sequelize = require('sequelize');
const sequelize = require('./database');

const Note = sequelize.define('Note', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    creat: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

sequelize.sync();

module.exports = Note;