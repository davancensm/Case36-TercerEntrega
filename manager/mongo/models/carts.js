import mongoose from "mongoose";

const cartsCollections = 'carts'

const CartsSchema = mongoose.Schema({
    timestamp:{type:Date, required:true},
    products:{type:Array, required:true}
})

export const cartsService = mongoose.model(cartsCollections,CartsSchema)