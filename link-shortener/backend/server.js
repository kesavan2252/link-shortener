const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { nanoid } = require('nanoid');
const cors = require('cors');
const linkRoutes = require('./routes/linkRoutes');
const Url = require('./models/Url'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.error('MongoDB connection failed:', err.message));

app.use('/api/links', linkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Ensure this points to your ShortUrl model



app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;
    try {
        const record = await ShortUrl.findOne({ shortId });
        if (!record) {
            return res.status(404).send('Shortened URL not found');
        }
        res.redirect(record.originalUrl); // Redirect to the original URL
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Existing server setup and database connection code...



app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// POST /shorten
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  const shortId = nanoid(6);
  const url = new Url({ originalUrl, shortId });
  await url.save();

  res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
});

// GET /:shortId
app.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });

  if (!url) {
    return res.status(404).json({ message: 'Shortened URL not found' });
  }

  res.redirect(url.originalUrl);
});


