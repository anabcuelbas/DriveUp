require('dotenv/config')
const {Pool} = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: '5432'
})

const getServicos = async (req, res) => {
    const query = "SELECT * FROM servico";
    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

const getSubServicos = async (req, res) => {
    const query = `
        SELECT * 
        FROM sub_servico
        WHERE sub_servico.Id IN (
            SELECT Id 
            FROM sub_servico
            WHERE servicoId = ${req.param.servicoId} AND estabelecimentoId = ${req.param.estabelecimentoId}
        )
    `;

    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

const getPrecoSubServico = async (req, res) => {
    const query = `
        SELECT Valor 
        FROM preco
        WHERE SubServicoId = ${req.param.subServicoId} AND (TipoVeiculo = '${req.param.tipoVeiculo}' OR TipoVeiculo = 'Todos')
    `;

    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getServicos,
    getSubServicos,
    getPrecoSubServico
}
