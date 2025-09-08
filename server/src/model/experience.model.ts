import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    name: String,
    award: String || null,
    year: Number || null,
    month: Number || null,
    day: Number || null,
    ref: String
});

export const Experience = mongoose.model('experience', experienceSchema);