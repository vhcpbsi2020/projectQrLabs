const Note = require('../config/model')

module.exports = {
    async list(req, res) {
        try {
            const notes = await Note.findAll()
            return res.json(notes);
        } catch (err) {
            return console.error("The following error occurred in the notes list: ", err);
        }
    },
    async show(req, res) {
        try {
            const note = await Note.findAll({ where: { id: req.params.id } });
            return res.json(note);
        } catch (err) {
            return console.err('The following error occurred in the search: ', err);
        }
    },
    async create(req, res) {
        const { content } = req.body;
        try {
            if (!content || content.trim() === '') {
                return res.status(400).json({ msg: 'Content cannot be empty' });
            }
            const note = await Note.create({ content });
            return res.status(200).json(note);
        } catch (error) {
            return console.error('Error in creation', err);
        }
    },
    async update(req, res) {
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { content, creat } = req.body;
        const id = req.params.id;
        try {
            const note = await Note.findOne({ where: { id: req.params.id } });
            if (!note) {
                return res.status(404).json({msg: `It is not possible to edit a note with a non-existent ID: ${req.params.id}`
                });
            }
            if (!content || content.trim() === '') {
                return res.status(400).json({ msg: 'Content cannot be empty' });
            }
            await Note.update({ content, creat }, { where: { id: { [Op.eq]: id } } });
            return res.json({ msg: `Note Content id: ${id} updated successfully!` });
        } catch (error) {
            return res.json({ msg: `Note ${id} has not been updated` }, err);
        }
    },
    async delete(req, res) {
        try {
            const note = await Note.findOne({ where: { id: req.params.id } });
            if (!note) {
                return res.status(404).json({ msg: `It is not possible to delete a note with a non-existent ID: ${req.params.id}` });
            }
            await Note.destroy({ where: { id: req.params.id } });
            return res.json({ msg: `Deletion of Note with ID: ${req.params.id} done successfully!` });
        } catch (err) {
            return console.err("    Deletion error:", err);
        }
    }
}