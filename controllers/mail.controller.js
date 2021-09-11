const sendMail = {}
const nodemailer = require('nodemailer');
const message = require('../models/mensaje')
require('dotenv').config();

sendMail.mail = (req, res) => {
    let mens = new message(req.body);

    let config = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post:465,
        secure: true,
        auth:{
            user:`${process.env.SEND_ACCOUNT}`,
            pass:`${process.env.SEND_ACCOUNT_PASS}`
        }
    });

    const opciones = {
        from: `${mens.email}`,
        subject:`${mens.subject} <${mens.email}>`,
        to:`${process.env.RECEIVE_ACCOUNT}`,
        text:`${mens.message}`
    };

    config.sendMail(opciones, (err, res)=>{

        if(err) return console.log(err)

    })
}
module.exports = sendMail;