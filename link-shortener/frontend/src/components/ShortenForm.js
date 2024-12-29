import { useState } from 'react';

function ShortenForm() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (input) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // Protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // Domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
      '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return !!pattern.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }
    setError('');
    // Send to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a URL to shorten"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Shorten</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default ShortenForm;
