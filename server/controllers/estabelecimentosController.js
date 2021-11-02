require('dotenv/config')
const {Pool} = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: '5432'
})

const getAllEstabelecimentos = async (req, res) => {
    const query = "SELECT * FROM estabelecimento";
    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

const getEstabelecimentosWithServico = async (req, res) => {
    const query = `
        SELECT * FROM estabelecimento
        WHERE estabelecimento.id IN (
            SELECT estabelecimentoId 
            FROM servico_estabelecimento
            WHERE servicoId = ${req.params.servicoId}
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

const getHorarios = async (req, res) => {
    const query = `
        SELECT *
        FROM horario_disponivel
        WHERE estabelecimentoId = ${req.params.estabelecimentoId} AND servicoId = ${req.params.servicoId}
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
    getAllEstabelecimentos,
    getEstabelecimentosWithServico,
    getHorarios
}
