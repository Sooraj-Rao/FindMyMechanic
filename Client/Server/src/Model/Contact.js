import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    message:{
        type:String,
    },
    type:{
        type:String
    }

})

export const contactModel=mongoose.model('contacts',contactSchema) ;