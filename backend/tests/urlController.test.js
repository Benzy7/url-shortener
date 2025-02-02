const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const urlController = require('../controllers/urlController');
const urlService = require('../services/urlService');

jest.mock('../services/urlService');

const app = express();
app.use(bodyParser.json());
app.post('/shorten', urlController.shortenUrl);
app.get('/:shortId', urlController.redirectUrl);

describe('URL Shortener API', () => {
  describe('POST /shorten', () => {
    it('should return a short URL when given a valid URL', async () => {
      urlService.createShortUrl.mockResolvedValue({ shortId: 'abc123' });

      const response = await request(app)
        .post('/shorten')
        .send({ originalUrl: 'https://example.com' });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.shortUrl).toMatch(/abc123/);
    });

    it('should return a 400 error for an invalid URL', async () => {
      const response = await request(app)
        .post('/shorten')
        .send({ originalUrl: 'invalid-url' });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error).toBe('Invalid URL');
    });
  });

  describe('GET /:shortId', () => {
    it('should return the original URL for a valid short ID', async () => {
      urlService.getOriginalUrl.mockResolvedValue('https://example.com');

      const response = await request(app).get('/abc123');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.originalUrl).toBe('https://example.com');
    });

    it('should return a 404 error if short ID is not found', async () => {
      urlService.getOriginalUrl.mockResolvedValue(null);

      const response = await request(app).get('/invalid123');

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.error).toBe('URL not found');
    });
  });
});
