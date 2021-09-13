const express = require('express');
const app = express();
const cors = require('cors')
const { mongoose } = require('./database');
const nodemailer = require('nodemailer');
const multer = require('./multer');
const path = require('path');


require('dotenv').config();

//settings
app.set('port', process.env.PORT);

//Middlewares
app.use(express.json());
app.use(cors({origin: `${process.env.FRONTEND_HOST}`}));

//Uploads folder
app.use('/uploads', express.static(path.resolve('uploads')));

//Routes
app.use('/proyects', multer.single('img'), require('./routes/portafolio.routes'));
app.use('/contact', require('./routes/mail.routes'));

//Start Server
app.listen(app.get('port'), ()=>{
    console.log('El servidor anda!')
});