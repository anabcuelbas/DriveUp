require('dotenv/config')
const {remetente} = require('../mailer')
const {Pool} = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: '5432'
})

const getReservas = async (req, res) => {
    const query = "SELECT * FROM reserva_servico";
    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

const addReserva = async (req, res) => {
    let nomeDono = req.body.nomeDono;
    let cpfDono = req.body.cpfDono;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let servico = req.body.servico;
    let data = req.body.data;
    let horario = req.body.horario;

    const query = "INSERT INTO reserva_servico (NomeDono, CpfDono, Telefone, Email, Servico, Data, Horario) VALUES ('" + nomeDono + "', '" + cpfDono + "', '" + telefone + "', '" + email + "', '" + servico + "', '" + data + "', '" + horario + "');"

    const response = await pool.query(query, async(err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }); 

    const emailToSend = {
        from: process.env.MAILER_USER,
        to: email,
        subject: 'Agendamento confirmado!',
        text: 'Olá, ' + nomeDono + '!\nSeu agendamento de ' + servico + ' está confirmado para o dia ' + data + ' às ' + horario,
    };

    remetente.sendMail(emailToSend, function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado com sucesso.');
        }
    })
}

module.exports = {
    getReservas,
    addReserva
}