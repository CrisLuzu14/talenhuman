//const path= require('path')
const express = require('express')
//const rootDir = require('../util/path')

const router=express.Router()
const Usuarios=require('../model/usuariosModel')
let user=null;
router.post('/empleados',async (req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    
        const usu =await Usuarios.find().sort({apellidos:1})
        //console.log(usu)
        res.render('menu',{'usu':usu})
    
} )
router.get('/empleados2',async(req,res,next)=>{
    const usu =await Usuarios.find().sort({apellidos:1})
        //console.log(usu)
        res.render('menu',{'usu':usu})  
} )
router.get('/gestion-empleado',(req,res,next)=>{
    res.render('formEmpleado',)   
} )
router.get('/gestion-empleado/:id',async(req,res,next)=>{
    const id =req.params.id
    
    const usu =await Usuarios.find({_id:id})
    
    res.render('menu',{'usu':usu})   
} )
router.get('/consulta',async(req,res,next)=>{
  
const usu =await Usuarios.find({}).sort({apellidos:1})
                res.send(usu)
})
router.get('/consulta/:id',async(req,res,next)=>{
  
    const usu =await Usuarios.find({_id:req.params.id})
                    res.send(usu)
    })
module.exports=router