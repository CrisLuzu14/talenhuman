const express = require('express')
const requireAuth = require('../middleware/authMiddleware')
const mailsendController= require('../controllers/mailsend')
const router = express.Router()

router.get('/enviarmail/:correo'/*, requireAuth*/,mailsendController.enviarmailsolicitud )

module.exports = router