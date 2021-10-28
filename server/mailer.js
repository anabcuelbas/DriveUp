require('dotenv/config')
const nodemailer = require('nodemailer');

const remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD }
});

module.exports = {
    remetente
}