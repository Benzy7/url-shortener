const { body, param } = require('express-validator');

const shortenUrlValidation = [
    body('originalUrl')
        .isURL()
        .withMessage('Invalid URL format')
        .notEmpty()
        .withMessage('URL is required'),
];

const redirectUrlValidation = [
    param('shortId')
        .isLength({ min: 8, max: 14 })
        .withMessage('Invalid short ID format'),
];

module.exports = { shortenUrlValidation, redirectUrlValidation };