const { Router } = require('express');
const router = Router(); // objeto que permite definir as rotas

const { getReservas, addReserva } = require('./controllers/reservasControllers');
const { getServico, getServicos, getSubServicos, getPrecoSubServico } = require('./controllers/servicosController');
const { getAllEstabelecimentos, getEstabelecimentosWithServico } = require('./controllers/estabelecimentosController');

router.get('/', (request, response) => response.json({ message: "API dos carros" }));

router.get('/estabelecimentos', getAllEstabelecimentos);
router.get('/oferta-servicos/:servicoId', getEstabelecimentosWithServico);

router.get('/servico/:servicoId', getServico);
router.get('/servicos', getServicos);
router.get('/sub-servicos/:servicoId/:estabelecimentoId', getSubServicos);
router.get('/preco/:subServicoId/:tipoVeiculo', getPrecoSubServico);

router.get('/reservas', getReservas);
router.post('/reserva', addReserva);

module.exports = router;