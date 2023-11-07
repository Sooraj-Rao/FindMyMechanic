import mongoose from "mongoose";

const AdminMsg=new mongoose.Schema({
   
    MessageTitle:{
        type:String
    },
    Message:{
        type:String
    },

})

export const AdminMsgModel=mongoose.model('Admin_msgs',AdminMsg) ;