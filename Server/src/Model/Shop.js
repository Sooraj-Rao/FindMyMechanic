import mongoose from "mongoose";

const ShopSchema=new mongoose.Schema({
    shopName:{
        type:String,
        unique:false
    },
    shopAddress:{
        type:String
    },
    shopPincode:{
        type:Number
    },
    shopEmail:{
        type:String
    },
    shopImage:{
        type:String
    },
    password:{
        type:String
    },
})

export const Shopmodel=mongoose.model('Shops',ShopSchema) ;