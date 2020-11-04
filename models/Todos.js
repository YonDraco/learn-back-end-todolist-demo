// connect with mongodb, mongoosejs
const mongoose = require('mongoose');
//create schema
const todoSchema = new mongoose.Schema({
  title: String,
  status: String

});

todoSchema.statics.getAll = function (p, n) {
  return this.find().skip((p - 1) * n).limit(n).lean();
}

todoSchema.statics.deleteById = function (id) {
  return this.deleteOne({ _id: id });
}

module.exports = mongoose.model('Todo', todoSchema);




