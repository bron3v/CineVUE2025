const { Router } = require('express');
const controller = require('./utenti_controller');

const router = Router();

// GET /utenti
router.get('/', controller.getUtenti);
router.get('/:id', controller.getUtentiById);

// POST /Utenti
router.post('/', controller.addUtenti);

// DELETE /Utenti
router.delete('/:id', controller.deleteUtenti);

// UPDATE /Utenti
router.put('/:id', controller.updateUtenti);

module.exports = router;






