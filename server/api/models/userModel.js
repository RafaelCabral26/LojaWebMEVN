const mongoose = require('mongoose')
const {Schema} = mongoose
//import mongoose from 'mongoose';
//import { Schema } from 'mongoose';

const userSchema = new Schema (
{

nome:{ 
    type: String,
    required:true},
email:{
    type: String,
    required:true
},
data_nasc:{
    type: Date,
    required:true
},
senha: {
    type: String,
    required:true
},
telefone:{
    type: String,
    required:true
},
cpf:{
    type: String,
    required:true
}
},
{timestamps: true}
);

const User = mongoose.model("User", userSchema)

module.exports = {
User,
userSchema
}
// export default {
//     User, userSchema
// }