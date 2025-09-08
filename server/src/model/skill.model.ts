import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: String,
    type: {type: String, required: true},
    image: {type: String, default: null}
});

export const Skill = mongoose.model("skill", skillSchema);