var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  description: String,
  completed: {type: Boolean, default: false},
  dueDate: Date,
  image: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

//embeds tasks & references category and users
var projectSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  // categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  tasks: [taskSchema]
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project
