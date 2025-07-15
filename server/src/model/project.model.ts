import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    award: { type: String },
    role: { type: String, required: true },
    titleImage: { type: String },
    isMobile: { type: Boolean, required: true },
    skills: { type: [String] },
    images: { type: [String] },
});