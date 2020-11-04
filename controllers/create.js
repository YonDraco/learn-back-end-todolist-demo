const { response } = require("express");
const { render } = require("pug");

const todoModel = require('../models/Todos');

function index(req, res) {
    res.render('create/index', { title: "Create" });


}
async function create(req, res) {
    let newTodo = new todoModel(req.body);
    await newTodo.save();
    res.redirect('/');


}
module.exports = { index, create };