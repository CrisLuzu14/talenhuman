
//import libreries
const path = require('path');
const express = require('express');//importa la libreria express
const amdinRoute = require('./routes/admin')
const empleadosRoute = require('./routes/empleados')
const solicitudRoute = require('./routes/solicitudVacaciones')
const mailsendRoute= require('./routes/mailsend')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

require('dotenv').config()//SEGURIDAD EN CLAVES

const app = express();//llamas al metodo express
//middleware
app.use(express.json())
app.use(cookieParser())

//connection DataBase MongoDB
const mongooseUrl = 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@vacaciones.qspdv.mongodb.net/vacacionesTalentHuman?retryWrites=true&w=majority'
mongoose.connect(mongooseUrl, {                                                       
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {//MUESTRA MENSAJE SI CONNECCTION FUE OK
    console.log('mongoose connect')
})
//SETTING
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//ROUTES
app.use(express.urlencoded({ extended: true })) //sirve para poder tomar los argumentos del get o post
app.use("/", amdinRoute)
app.use("/empleado", empleadosRoute)
app.use("/solicitud", solicitudRoute)
app.use("/mail", mailsendRoute)
app.use(express.static(__dirname + '/public'))//para poder usar los recursos como img js css

//PAGE NOT FOUND
app.use((req, res, next) => {
    res.status(400).render('404')
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000)//de esta manera queda mas simple y ya no se necesita utilizar el require('http')
// npm init -f
// npm install --save express
// npm install --save-dev nodemon
// agregar script package.json "start":"nodemon app.js"
// pasos crear Server
// importar librería express const express= require('express');
// metodo que esta pendiendo cuando se llama al servidor app.listen(3000) va al final
// llamar al método const app =express();
// si se necesita para tomar los argumentos app.use(express.urlencoded({extended:true}))
// gestionar rutas app.use('/ruta',(req,res,next)=>{})
// next() funciona para dar paso al siguiente método que sigue en el código
// obtener argumentos req.body req.body.nombreDelArgumento
// redireccionar paginas o ruts con res.redirect('/nombreRutas')
// para enviar la respuesta del server se usa send()  res.send('<h1>hello from server nodejs!</h1>') 
