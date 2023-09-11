const Note = require('../config/model')

module.exports = {
    async list(req, res){
        try{
            const notes = await Note.findAll()
            return res.json(notes); 
        } catch(err){
            return console.error("ocorreu o seguinte erro na listagem de notas: ", err);
        }
    },
    async show(req, res){
        try{
            const note = await Note.findAll({where: {id: req.params.id}});
            return res.json(note);
        } catch (err){
            return console.err('ocorreu o seguinte erro na busca: ', err);
        }
    },
    async create(req, res){
        const {content} = req.body;
        try {
            const note = await Note.create({content});
            return res.json(note);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { content, creat } = req.body;
        const id = req.params.id;
        try {
            const note = await Note.findOne({where: {id: req.params.id }});
            if (!note) {
                return res.status(404).json({msg: `Não é possível editar uma nota com ID inexistente: ${req.params.id}`});
            }
            await Note.update({content, creat}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `Conteudo da Nota id: ${id} atualizado com sucesso!!`});
        } catch (error) {
            return res.json({msg: `Nota ${id} não foi atualizada`}, err);            
        }
    },
    async delete(req, res){
        try {
            const note = await Note.findOne({where: {id: req.params.id }});
            if (!note) {
                return res.status(404).json({msg: `Não é possível excluir uma nota com ID inexistente: ${req.params.id}`});
            }
            await Note.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de Nota com ID: ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    }
}