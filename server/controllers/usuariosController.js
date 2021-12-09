require('dotenv/config')
const {Pool} = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: '5432'
})

const getUsuario = async (req, res) => {
    const tipo = req.params.tipo;
    let query = ``;
    
    if (tipo == 'empresa') {
        query = `
            SELECT * 
            FROM estabelecimento
            WHERE estabelecimento.email IN (
                SELECT perfil.email 
                FROM  perfil
                WHERE perfil.email = '${req.params.perfilEmail}' AND perfil.senha = '${req.params.perfilSenha}'
            )
        `;
    } else if (tipo == 'usuario') {
        query = `
            SELECT * 
            FROM usuario
            WHERE usuario.email IN (
                SELECT perfil.email 
                FROM  perfil
                WHERE perfil.email = '${req.params.perfilEmail}' AND perfil.senha = '${req.params.perfilSenha}'
            )
        `;
    }

    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

const createUsuario = async (req, res) => {
    let email = req.body.email;
    let senha = req.body.senha;
    let tipo = req.body.tipo;

    let telefone = req.body.telefone;
    let nomeUsuario = req.body.nomeUsuario;

    let nomeEmpresa = req.body.nomeEmpresa;
    let endereco = req.body.endereco;
    let hora = req.body.horaFuncionamento;
    let dia = req.body.diasFuncionamento;
    let imagem = req.body.img;

    let query = ``;

    if (tipo == 'empresa') {
        query = "INSERT INTO estabelecimento (Nome,  Endereco, HoraFuncionamento, DiasFuncionamento, image_url) VALUES ('" + nomeEmpresa + "', '"  + endereco + "', '" + hora + "', '" + dia + "', '" + imagem + "'); INSERT INTO perfil (email,  senha) VALUES ('" + email + "', '"  + senha + "');"
    } else if (tipo == 'usuario') {
        query = "INSERT INTO usuario (nome,  telefone, email) VALUES ('" + nomeUsuario + "', '"  + telefone + "', '" + email + "'); INSERT INTO perfil (email,  senha) VALUES ('" + email + "', '"  + senha + "');"
    }

    const response = await pool.query(query, async(err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }); 
}

const updateUsuario = async (req, res) => {
    let email = req.body.email;
    let telefone = req.body.telefone;
    let nome = req.body.nome;

    const query = `
        UPDATE usuario
        SET telefone = '${telefone}', nome = '${nome}'
        WHERE usuario.email = '${email}'
    `;

    const response = await pool.query(query, async(err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }); 
}

const updateEstabelecimento = async (req, res) => {
    let email = req.body.email;
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let hora = req.body.horaFuncionamento;
    let dia = req.body.diasFuncionamento;
    let imagem = req.body.img;

    const query = `
        UPDATE estabelecimento
        SET nome = '${nome}', endereco = '${endereco}', horaFuncionamento = '${hora}', diasFuncionamento = '${dia}', image_url = '${imagem}'
        WHERE estabelecimento.email = '${email}'
    `;

    const response = await pool.query(query, async(err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }); 
}

module.exports = {
    getUsuario,
    createUsuario,
    updateUsuario,
    updateEstabelecimento
}