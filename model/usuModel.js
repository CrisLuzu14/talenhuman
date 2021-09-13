const mongoose= require('mongoose')

const UsuSchema = new mongoose.Schema({
   user:String,
   pass:String,

},{collection: "userpass"})

module.exports=mongoose.model('userpass',UsuSchema)
