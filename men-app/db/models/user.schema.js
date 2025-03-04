import mongoose from "mongoose";
import '../db/connection.js'

const {Schema, model} = mongoose;

const userSchema = new Schema({ 
    name: {type: String,
            required: [true, 'Name is required']
    }, 
    surName: String, 
    email: String, 
    pass: String
});

const userModel = model('User', userSchema);
export default userModel;


