const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
    shortId: { type: String, required: true, unique: true },
    originalUrl: { type: String, required: true }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
