//const path= require('path')
const express = require('express')
const requireAuth = require('../middleware/authMiddleware')
const solicitudController=require('../controllers/solicitudVacaciones')
const router = express.Router()

router.get('/solicitud_vacaciones/:id', requireAuth, solicitudController.solicitud_vacaciones)

router.get('/consultavacaciones/:id', requireAuth, solicitudController.solicitud_vacacionesPorId)

router.post('/add-solicitud', requireAuth, solicitudController.addSolicitud)
// codigoSec=N°.+ABG-UAH-ACP-2021-001vac&fdesde=&fhasta=&art1=29&motivo=VACACIONES&memorando=
// &fechaMotivo=&tipo=VACACIONES&jencargada=&
// jencargada2=&jencargada3=&usuario=&
// user=613101592b49478e961efb95&idSol=&fecha=8+de+septiembre+de+2021

module.exports = router
