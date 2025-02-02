const shortid = require('shortid');
const Url = require('../models/Url');

const createShortUrl = async (originalUrl) => {
  const shortId = shortid.generate();
  const newUrl = new Url({ longUrl: originalUrl, shortId });
  await newUrl.save();
  return newUrl.toObject();
};

const getOriginalUrl = async (shortId) => {
  const url = await Url.findOne({ shortId });  
  return url ? url.longUrl: null;
};

module.exports = { createShortUrl, getOriginalUrl };
