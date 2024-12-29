const express = require('express');
const router = express.Router();
const Url = require('../models/Url'); // Assuming you have a Mongoose model for URLs
const { nanoid } = require('nanoid');

// Route to shorten the URL
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  try {
    // Validate URL
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
      'i'
    );

    if (!urlPattern.test(originalUrl)) {
      return res.status(400).json({ message: 'Invalid URL' });
    }

    // Generate a short ID
    const shortId = nanoid(6);

    // Save to database
    const url = new Url({ originalUrl, shortId });
    await url.save();

    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Route to redirect to original URL
router.get('/:shortId', async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
