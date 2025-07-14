import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    isMobile: { type: Boolean, required: true }
});