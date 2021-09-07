//const path= require('path')
const express = require('express')
//const rootDir = require('../util/path')

const router=express.Router()
const Usuarios=require('../model/usuariosModel')
const Solicitudes=require('../model/solicitudModel')
let user=null;
router.get('/solicitud_vacaciones/:id',async(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    let id=req.params.id
    res.render('solicitud',{'id':id})
} )
router.get('/consultavacaciones/:id',async(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    
    let id=req.params.id    
        const sol =await Solicitudes.find({_id:id})
        res.send(sol)  
} )
 
module.exports=router