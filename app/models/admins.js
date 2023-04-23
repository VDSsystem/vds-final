import mongoose from "mongoose";
const Schema = mongoose.Schema
const adminSchema = new Schema({
    email : {
        type : String,
        required : [true , 'email is a required field'],
    },
    password : {
        type: String,
        required : [true , 'password is a required field'],
    },
})
export default mongoose.model('Admin', adminSchema)
