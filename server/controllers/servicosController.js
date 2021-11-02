require('dotenv/config')
const {Pool} = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: '5432'
})

const getServico = async (req, res) => {
    const query = `
        SELECT *
        FROM servico
        WHERE id = ${req.params.servicoId}
    `;

    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

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
            WHERE servicoId = ${req.params.servicoId} AND estabelecimentoId = ${req.params.estabelecimentoId}
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
        WHERE SubServicoId = ${req.params.subServicoId} AND (TipoVeiculo = '${req.params.tipoVeiculo}' OR TipoVeiculo = 'Todos')
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
    getServico,
    getServicos,
    getSubServicos,
    getPrecoSubServico
}
