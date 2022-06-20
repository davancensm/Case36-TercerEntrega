import mongoose from "mongoose";

const productsCollection = 'products'

const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    code:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
    stock:{type:Number, required:true},
    timestamp:{type:Date, required:true}

})

export const productsService = mongoose.model(productsCollection,productSchema)