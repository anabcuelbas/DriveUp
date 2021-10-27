const { Router } = require('express');
const router = Router(); // objeto que permite definir as rotas

const {getReservas, addReserva} = require('./controllers/reservasControllers');

router.get('/', (request, response) => response.json({ message: "API dos carros" }))

router.get('/reservas', getReservas);
router.post('/reserva', addReserva);

module.exports = router;