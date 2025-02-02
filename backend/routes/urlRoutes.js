const express = require('express');
const router = express.Router();
const { shortenUrlValidation, redirectUrlValidation } = require('../validators/urlValidator');
const { shortenUrl, redirectUrl } = require('../controllers/urlController');

router.post('/url/shorten', shortenUrlValidation, shortenUrl);
router.get('/url/:shortId', redirectUrlValidation, redirectUrl);

module.exports = router;