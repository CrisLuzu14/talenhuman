const mongoose= require('mongoose')

const SolicitudSchema = new mongoose.Schema({
    codigoSec: String,
    fdesde: String,
    fhasta: String,
    tipo: String,
    jencargada: String,
    jencargada2: String,
    usuario: String,
    art5: String,
    art4: String,
    art3: String,
    art2: String,
    art1: String,
    art: String,
    memorando: String,
    fecha: String,
    noficio: String,
    jencargada3:String,
    fechaMotivo:String,
    noficio:String,
    motivo:String,
    abreviatura:String,
    lit2:String,
    lit1:String,
    conforme:String,
    apoyo:String,
    persona:String,
    memorando2:String,
    mes:String,
    resolucion:String,
    resolucion2:String,
    valor:String,
    conforme:String

})

module.exports=mongoose.model('solicitudes',SolicitudSchema)
