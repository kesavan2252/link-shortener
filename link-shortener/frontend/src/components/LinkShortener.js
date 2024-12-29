import React, { useState } from 'react';
import axios from 'axios';

const LinkShortener = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const shortenLink = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/links', { originalUrl });
            setShortUrl(`http://localhost:5000/${response.data.shortUrl}`);
        } catch (error) {
            console.error('Error shortening the URL:', error);
        }
    };

    return (
        <div className="link-shortener">
            <input
                type="text"
                placeholder="Enter URL"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <button onClick={shortenLink}>Shorten</button>
            {shortUrl && <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>}
        </div>
    );
};

export default LinkShortener;
