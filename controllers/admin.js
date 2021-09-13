//Connection a base
const mongoose = require('mongoose')
//Models
const Usu = require('../model/usuModel')
//VARIABLE GLOBAL
require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.init = (req,res,next)=>{//el méthod use recibe 4 o mas paramatros ('ruta',(req,res,next)=>{}) 
    res.render('login')
}

exports.login=async(req,res,next)=>{//el méthod use recibe 4 o mas paramatros ('ruta',(req,res,next)=>{}) 
    let usuario = req.body.username;
    let pass = req.body.password;
    //console.log(req.body);
    try{
        const user = await Usu.findOne({user : usuario});
        if (user) {
            //console.log(user);
            //console.log(bcrypt.hashSync(req.body.password))
            //const auth = bcrypt.compareSync(req.body.password, user.password);
            const auth = user.pass == pass;
            //console.log(auth)
            if (auth) {
                //create token
                let maxAge = 3 * 24 * 60 * 60;
                let token = jwt.sign({ user: user.username }, process.env.SECRET_KEY, { expiresIn: maxAge });
                res.cookie('data', {idUsuario : user._id})
                res.cookie('jwt', token, { /*httpOnly: true,*/ maxAge: maxAge * 1000 }).json({ status : 1, user: user._id});
            } else {
                //incorrect password
                res.json({ status : 0, message: 'Error de Credenciales' });
            }
        } else {
            //throw Error('incorrect usename');
            res.json({ status : 0, message: 'Error de credenciales' });
        }

    }catch (err){
        console.log(err)
        res.send(400)
    }
}

exports.logout=async(req,res,next)=>{//el méthod use recibe 4 o mas paramatros ('ruta',(req,res,next)=>{}) 
    res.cookie('jwt','',{maxAge:1})
    res.cookie('data','',{maxAge:1})
    res.redirect('/')
 }

 exports.rememberPassword=(req,res,next)=>{
    res.render('rememberPassword')
} 