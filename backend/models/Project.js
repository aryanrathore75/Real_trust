const mongoose = require("mongoose");
const ProjectSchema = require("../schemas/ProjectSchema");

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
