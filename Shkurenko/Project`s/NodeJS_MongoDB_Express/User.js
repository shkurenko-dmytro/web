import mongoose, { Schema } from "mongoose";

const User = new Schema({
    userName: {type: String,unique: true, required: true },
    password: {type: String,unique: false, required: true },
    role: { type: String, ref: 'Role'} 
})

export default mongoose.model('User', User);