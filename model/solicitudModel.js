const mongoose= require('mongoose')

const SolicitudSchema = new mongoose.Schema({
    codigoSec: String,
    fdesde: String,
    fhasta: String,
    tipo: String,
    jencargada: String,
    jencargada2: String,
    usuario: String,
    art1: String,
    art: String,
    memorando: String,
    fecha: String,
    noficio: String,
    jencargada3:String

})

module.exports=mongoose.model('solicitudes',SolicitudSchema)
