const { Router } = require('express');
const controller = require('./recensioni_controller');
const router = Router();

// GET /utenti
router.get('/', controller.getRecensioni);
router.get('/:id', controller.getRecensioniById);

// POST /Utenti
router.post('/',  controller.addRecensioni);

// DELETE /Utenti
router.delete('/:id', controller.deleteRecensione);

// UPDATE /Utenti
router.put('/:id', controller.updateRecensione);

module.exports = router;






