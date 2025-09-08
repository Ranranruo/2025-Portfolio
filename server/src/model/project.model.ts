import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    introduction: {type: String, default: "설명이 없습니다."},
    role: {type: String, required: true},
    titleImage: {type: String, default: null},
    subImages: {type: [String], default: []},
    experienceId: {type: mongoose.Schema.Types.ObjectId, default: null},
    skillIds: {type: [mongoose.Schema.Types.ObjectId], default: []}
});

export const Project = mongoose.model('project', projectSchema);