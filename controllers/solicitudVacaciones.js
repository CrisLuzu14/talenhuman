const Solicitudes = require('../model/solicitudModel')
const Usuarios = require('../model/usuariosModel')
const { consultatodos } = require('./empleados')

exports.solicitud_vacaciones=async (req, res, next) => {//el métod use recibe 3 paramatros req,res,next
    let id = req.params.id
    res.render('solicitud', { 'id': id })
}

exports.solicitud_vacacionesPorId=async (req, res, next) => {//el métod use recibe 3 paramatros req,res,next
    let id = req.params.id
    const sol = await Solicitudes.find({ _id: id })
    res.send(sol)
}

exports.addSolicitud=async (req, res, next) => {//el métod use recibe 3 paramatros req,res,next
    let idsol = req.body.idSol
    if (idsol == '') {
        let sol = new Solicitudes(req.body)
        let tipoLength = await (await Solicitudes.find({tipo:sol.tipo})).length
        tipoLength++
        
        sol.tipo=`N°. ABG-UAH-ACP-2021-${tipoLength}${sol.abreviatura}`       
        //console.log(sol.tipo)
        let nombra='vacaciones mnjn'
        console.log(nombra.split(' ').length)
        
        // await sol.save()
        // const usu = await Usuarios.findOne({ _id: req.body.user })
        // usu.idSolicitud = sol._id
        // usu.save(usu)
        // res.redirect('/mail/enviarmail/'+usu.correo)
        //res.redirect('/empleado/consultatodos')
        res.status(200).send('subtmit')
    } else {
        const sol = await Solicitudes.findOne({ _id: idsol })
        sol.codigoSec=req.body.codigoSec
        sol.fdesde=req.body.fdesde
        sol.fhasta=req.body.fhasta
        sol.tipo=req.body.tipo
        sol.jencargada=req.body.jencargada
        sol.jencargada2=req.body.jencargada2
        sol.jencargada3=req.body.jencargada3
        sol.usuario=req.body.usuario
        sol.art1=req.body.art1
        sol.memorando=req.body.memorando
        sol.fechaMotivo=req.body.fechaMotivo
        sol.motivo=req.body.motivo
        sol.fecha=req.body.fecha
        sol.save(sol)
        res.redirect('/empleado/consultatodos')
    } 
}