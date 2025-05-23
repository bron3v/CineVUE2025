const {Router} = require('express');
const controller = require('./session_controller');
const { route } = require('../film/film_routes');
const router = Router();

router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.get('/isLogged', controller.isLogged);

module.exports = router;