const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:String,
    password:{type:String, required:true},
    address: String,
    postal_code:String,
    city:String,
    phone:String,
    email:{type:String, required:true, unique:true},
    description:String
   
})


module.exports=mongoose.model("User", UserSchema)