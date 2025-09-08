import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: String,
    introduction: String,
    competition: String,
    award: String,
    role: String,
    titleImage: String,
    slideImages: [String],
    descriptionImages: [String],
    skills: [String]
});

export const Project = mongoose.model('Project', projectSchema);