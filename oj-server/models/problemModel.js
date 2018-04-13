var mongoose = require('mongoose');
var ProblemSchema = mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  difficulty: String
});
var problemModel = mongoose.model("problemModel", ProblemSchema);

module.exports = problemModel;
