const config = require('../configs/server');
const { validationResult } = require('express-validator');
const urlService = require('../services/urlService'); 
const { isValidkUrl } = require('../utils/urlHelper');

const shortenUrl = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { originalUrl } = req.body;
    if(!isValidkUrl(originalUrl)){
      res.status(400).json({ success: false, error: 'Invalid URL' });
    }
    const url = await urlService.createShortUrl(originalUrl);
    res.status(201).json({ success: true, shortUrl: `${config.frontUrl}/${url.shortId}` });
  } catch (error) {    
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    const originalUrl = await urlService.getOriginalUrl(shortId);
    
    if (!originalUrl) return res.status(404).json({ success: false, error: 'URL not found' });
    res.status(200).json({ success: true, originalUrl: originalUrl });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = { shortenUrl, redirectUrl };