import mongoose from "mongoose";

const { Schema, model } = mongoose;

const noteModel = new Schema(
    {
        title:{type: String, required: [true, "Title is required"]},
        text:{type: String, required: [true, "Text is required"]},
        status:{type: String, enum : ['Published','Draft','Archived'],required: [true, "Status is required"] },
        author_id
    },
    {
      timestamps: true,
    }
);