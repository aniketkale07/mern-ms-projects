import { Timestamp } from "bson";
import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username : {type : String, required :true, Uique:true, lowercase:true },
    password : {type : String, required : true},       
},{
    timeStamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;