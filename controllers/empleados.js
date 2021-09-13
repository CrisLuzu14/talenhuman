const Usuarios = require('../model/usuariosModel')

exports.consultatodos=async (req, res, next) => {//el métod use recibe 3 paramatros req,res,next   
    const usu = await Usuarios.find().sort({ apellidos: 1 })
    res.render('menu', { 'usu': usu })
}

exports.consulta=async (req, res, next) => {//el métod use recibe 3 paramatros req,res,next   
    const usu = await Usuarios.find().sort({ apellidos: 1 })
    res.send(usu)
}
exports.obtenerPorId=async (req, res, next) => {//el métod use recibe 3 paramatros req,res,next   
    const usu = await Usuarios.findOne({ _id: req.params.id })
    res.send(usu)
}

exports.gestionempleadoAgregar=(req, res, next) => {
    let usu =new Usuarios()
    console.log(usu.nombres)
    res.render('formEmpleado',{'usu':usu})
}

exports.gestionempleadoActualizar=async (req, res, next) => {
    const id = req.params.id
    let usu = await Usuarios.findOne({ _id: id })
    res.render('formEmpleado', { 'usu': usu })
}

exports.addempleado=async (req, res, next) => {
    if(req.body.id==''){
        const usu2 = await (await Usuarios.find({})).length
    let usu = new Usuarios(req.body)
    usu.idRoles='empleado'
    usu.iduser=usu2+1
    usu.idSolicitud=''
    usu.idUsuario=''
    
     await usu.save()
    }else{
       // console.log(req.body)
        let usu = await Usuarios.findOne({_id:req.body.id})
        usu.partida=req.body.partida
        usu.cedula=req.body.cedula
        usu.apellidos=req.body.apellidos
        usu.nombres=req.body.nombres
        usu.fig=req.body.fig
        usu.modalidad=req.body.modalidad
        usu.lugar=req.body.lugar
        usu.puestoD=req.body.puestoD
        usu.fv_nombramiento=req.body.fv_nombramiento
        usu.proceso=req.body.proceso
        usu.subproceso=req.body.subproceso
        usu.l_trabajo=req.body.l_trabajo
        usu.puesto=req.body.puesto
        usu.rmu=req.body.rmu
        usu.correo=req.body.correo
        usu.estado=req.body.estado        
        usu.save(usu)
    }
     res.redirect('/empleado/consultatodos')
}

exports.obtenerPorId2=async (req, res, next) => {
    const usu = await Usuarios.find({ _id: req.params.id })
    res.send(usu)
}