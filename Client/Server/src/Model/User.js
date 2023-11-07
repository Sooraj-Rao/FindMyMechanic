import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:false
    },
    phone:{
        type:Number,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
})

export const Usermodel=mongoose.model('Users',UserSchema) ;