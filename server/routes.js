const { Router } = require('express');
const router = Router(); // objeto que permite definir as rotas

const { getReservas, addReserva } = require('./controllers/reservasControllers');
const { getServicos, getSubServicos, getPrecoSubServico } = require('./controllers/servicosController');
const { getAllEstabelecimentos, getEstabelecimentosWithServico } = require('./controllers/estabelecimentosController');

router.get('/', (request, response) => response.json({ message: "API dos carros" }));

router.get('/estabelecimentos', getAllEstabelecimentos);
router.get('/oferta-servicos', getEstabelecimentosWithServico);

router.get('/servicos', getServicos);
router.get('/sub-servicos', getSubServicos);
router.get('/preco', getPrecoSubServico);

router.get('/reservas', getReservas);
router.post('/reserva', addReserva);

module.exports = router;