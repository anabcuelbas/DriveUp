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
            SELECT id, nome, endereco, horafuncionamento, diasfuncionamento, email, imagemUrl AS img
            FROM estabelecimento
            WHERE estabelecimento.email IN (
                SELECT perfil.email 
                FROM  perfil
                WHERE perfil.email = '${req.params.perfilEmail}' AND perfil.senha = '${req.params.perfilSenha}'
            )
        `;
    } else if (tipo == 'usuario') {
        query = `
            SELECT nome AS nomeUsuario, email, telefone 
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
    let senha = req.body.senha;
    let tipo = req.body.tipo;

    let emailUsuario = req.body.usuario.email;
    let telefone = req.body.usuario.telefone;
    let nomeUsuario = req.body.usuario.nomeUsuario;

    let nomeEmpresa = req.body.empresa.nomeEmpresa;
    let endereco = req.body.empresa.endereco;
    let hora = req.body.empresa.horafuncionamento;
    let dia = req.body.empresa.diasfuncionamento;
    let imagem = req.body.empresa.img;
	let emailEmpresa = req.body.empresa.emailEmpresa;

    let query = ``;

    if (tipo == 'empresa') {
        query = `
            INSERT INTO estabelecimento (nome, endereco, horafuncionamento, diasfuncionamento, imagemurl, email)
            VALUES ('${nomeEmpresa}', '${endereco}', '${hora}', '${dia}', '${imagem}', '${emailEmpresa}');

            INSERT INTO perfil (email, senha, tipo)
            VALUES ('${emailEmpresa}', '${senha}', '${tipo}');
        `;
    } else if (tipo == 'usuario') {
        query = `
            INSERT INTO usuario (nome, telefone, email)
            VALUES ('${nomeUsuario}', '${telefone}', '${emailUsuario}');

            INSERT INTO perfil (email, senha, tipo)
            VALUES ('${emailUsuario}', '${senha}', '${tipo}');
        `;
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
        SET nome = '${nome}', endereco = '${endereco}', horafuncionamento = '${hora}', diasfuncionamento = '${dia}', imagemurl = '${imagem}'
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
