const { Router } = require('express');
const router = Router(); // objeto que permite definir as rotas

const { getReservas, addReserva } = require('./controllers/reservasControllers');
const { getServico, getServicos, getSubServicos, getPrecoSubServico } = require('./controllers/servicosController');
const { getAllEstabelecimentos, getEstabelecimentosWithServico, getHorarios } = require('./controllers/estabelecimentosController');
const { getUsuario, createUsuario, updateUsuario, updateEstabelecimento } = require('./controllers/usuariosController');

router.get('/', (request, response) => response.json({ message: "API dos carros" }));

router.get('/estabelecimentos', getAllEstabelecimentos);
router.get('/oferta-servicos/:servicoId', getEstabelecimentosWithServico);
router.get('/horarios/:estabelecimentoId/:servicoId', getHorarios);

router.get('/servico/:servicoId', getServico);
router.get('/servicos', getServicos);
router.get('/sub-servicos/:servicoId/:estabelecimentoId', getSubServicos);
router.get('/preco/:subServicoId/:tipoVeiculo', getPrecoSubServico);

router.get('/reservas', getReservas);
router.post('/reserva', addReserva);

router.get('/usuario', getUsuario);
router.post('/cadastrar', createUsuario);
router.post('/atualizar-usuario', updateUsuario);
router.post('/atualizar-estabelecimento', updateEstabelecimento);

module.exports = router;