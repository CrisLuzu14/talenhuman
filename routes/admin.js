const express=require('express')

//Controllers
const adminController=require('../controllers/admin')

//ROUTES
const router=express.Router()
router.get('/', adminController.init)
router.post('/login', adminController.login )
router.get('/logout', adminController.logout )
router.get('/recuperar_clave',adminController.rememberPassword)

module.exports=router