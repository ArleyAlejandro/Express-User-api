import mongoose from "mongoose";

const { Schema, model } = mongoose;

const noteSchema = new Schema(
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


const noteModel = model("Note", noteSchema);
export default noteModel;