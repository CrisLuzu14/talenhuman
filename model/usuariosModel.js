const mongoose= require('mongoose')

const UsuariosSchema = new mongoose.Schema({
   iduser:String,
   partida:String,
   cedula: String,
   apellidos: String,
   nombres: String,
   fig:String,
   modalidad:String,
   lugar:String,
   puestoD:String,
   fv_nombramiento:String,
   proceso:String,
   subproceso:String,
   l_trabajo:String,
   puesto:String,
   rmu:String,
   correo:String,
   estado:String,
   idSolicitud:String,
   idUsuario:String,
   idRoles:String

})

module.exports=mongoose.model('usuarios',UsuariosSchema)
