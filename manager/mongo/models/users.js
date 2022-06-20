import mongoose from "mongoose";

const usersCollection = 'users'

const userSchema = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    name: {type:String},
    address: {type:String},
    age: {type:Number},
    phone: {type:String},
    file: {type:String},
    isAdmin: {type:String}
})

export const User = mongoose.model(usersCollection,userSchema)