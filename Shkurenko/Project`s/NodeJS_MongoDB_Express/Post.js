import mongoose from "mongoose";

const Post = new mongoose.Schema({
    model : {type: String, required : true },
    image : {type: String, required : true},
    range : {type: String, required : true},
    top_speed : {type : String,required : true},
    mph: {type: String, required : true}
})

export default mongoose.model('Post', Post);