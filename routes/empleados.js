const express = require('express')
const requireAuth = require('../middleware/authMiddleware')
const empleadosController=require('../controllers/empleados')

//const rootDir = require('../util/path')

const router = express.Router()

router.get('/consultatodos', requireAuth, empleadosController.consultatodos)
router.get('/consulta', requireAuth, empleadosController.consulta)
router.get('/consulta/:id', requireAuth, empleadosController.obtenerPorId)
router.get('/gestion-empleado', requireAuth,  empleadosController.gestionempleadoAgregar)
router.get('/gestion-empleado/:id', requireAuth,  empleadosController.gestionempleadoActualizar)
router.post('/add-empleado', requireAuth,  empleadosController.addempleado)
router.get('/consulta/:id', requireAuth,  empleadosController.obtenerPorId2)
module.exports = router
