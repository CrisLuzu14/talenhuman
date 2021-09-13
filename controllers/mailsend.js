const nodemailer = require("nodemailer");
exports.enviarmailsolicitud = async function (req, res) {
    console.log('email ing')
    let message= `
  

    <body style="margin: 0px; background-color: #F4F3F4; font-family: Helvetica, Arial, sans-serif; font-size:12px;" text="#444444" bgcolor="#F4F3F4" link="#21759B" alink="#21759B" vlink="#21759B" marginheight="0" topmargin="0" marginwidth="0" leftmargin="0">
    <table border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#F4F3F4">
    <tbody>
    <tr>
    <td style="padding: 15px;"><center>
    <table width="550" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
    <tbody>
    <tr>
    <td align="left">
    <div style="border: solid 1px #d9d9d9;">
    <table id="header" style="line-height: 1.6; font-size: 25px; font-family: Helvetica, Arial, sans-serif; border: 1px solid #ffffff; color: #444444; height: 86px;" border="0" width="549" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
    <tbody>
    <tr>
    <td align="center" style="background-color: #2d2d2d; color: #ffffff;" colspan="2" valign="bottom" height="30" width="549"> TALENTO HUMANO</td>
    </tr>
    <tr>
    <td style="background-color: #E8E8E8; " valign="baseline"><p align="center" style="margin: 0;"><img class="wp-image-905 alignnone" src="https://i.ibb.co/s5zX97M/abg.png" alt="" style="height: 90px;" /></p></td>
    </tr>
    </tbody>
    </table>
    <table id="content" style="margin-top: 15px; margin-right: 30px; margin-left: 30px; color: #444; line-height: 1.6; font-size: 12px; font-family: Arial, sans-serif;" border="0" width="490" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
    <tbody>
    <tr>
    <td style="border-top: solid 1px #d9d9d9; vertical-align:top;" colspan="2" width="150">
    <div style="padding: 15px 15px 0 0;">
    <div><span><b><u>RECORDATORIO:</u></b> <i>Acercarse a Gestión Administrativa de Talento Humano a firmar su acción de personal .</i></span></div>
    </div>
    </td>
    
    </td>
    </tr>
    </tbody>
    </table>
    <br>
    <table id="footer" style="line-height: 1.5; font-size: 12px; font-family: Arial, sans-serif; margin-right: 30px; margin-left: 30px;" border="0" width="490" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
    <tbody>
    <tr style="font-size: 11px; color: #999999;">
    <td style="border-top: solid 1px #d9d9d9;" colspan="2">
    <div style="text-align:center"><span>Este mensaje se ha enviado desde el área de Talento Humano</span></div>
    <div style="text-align:center;"><strong>Contacto: </strong> <a ><span style=" color: #ff0000;">gestion.talentohumano@abgalapagos.gob.ec</span></a></div>
    </td>
    </tr>
    <tr>
    </tr>
    </tbody>
    </table>
    </div>
    </td>
    </tr>
    <td style="background-color: #2d2d2d; color: #ffffff;" colspan="2" valign="bottom" height="10" width="549"></td>
    </tbody>
    </table>
    </center></td>
    </tr>
    </tbody>
    </table></body>`
    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'human21talent@gmail.com', // generated ethereal user
      pass: 'gtomgzkvcttqsubh', // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
      console.log('ready for emails')
  })
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Registro de solicitud 👻" <human21talent@gmail.com>', // sender address
    to: req.params.correo, // list of receivers
    subject: "Registro de solicitud", // Subject line
    //text: "Hello world?", // plain text body
    html: message, // html body
  });
  console.log('enviado a '+req.params.correo)

    res.redirect('/empleado/consultatodos')
}