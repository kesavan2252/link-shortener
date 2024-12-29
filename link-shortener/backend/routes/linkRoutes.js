const express = require('express');
const router = express.Router();
const Link = require('../models/Link');

// Generate short URL
router.post('/', async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = Math.random().toString(36).substring(7);
    const link = new Link({ originalUrl, shortUrl });
    await link.save();
    res.json(link);
});

// Redirect short URL
router.get('/:shortUrl', async (req, res) => {
    const link = await Link.findOne({ shortUrl: req.params.shortUrl });
    if (link) {
        res.redirect(link.originalUrl);
    } else {
        res.status(404).json({ error: 'URL not found' });
    }
});

module.exports = router;
