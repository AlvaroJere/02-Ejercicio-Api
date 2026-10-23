const express = require('express');
const aireCtrl = require('../controllers/aire.controller');
const router = express.Router();

router.get('/', aireCtrl.getAires);
router.get('/idAire/:id', aireCtrl.getAires);
router.post('/', aireCtrl.addAires);

module.exports = router;