import React, { useState } from 'react';
import axios from 'axios';

const ShortenForm = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');
    const [copySuccess, setCopySuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/url/shorten`, {
                originalUrl: url,
            });
            setShortUrl(response.data.shortUrl);
            setError('');
            setCopySuccess('');
        } catch (err) {
            setError('Failed to shorten URL. Please try again.');
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopySuccess('Copied to clipboard!');
            setTimeout(() => setCopySuccess(''), 3000);
        } catch (err) {
            setCopySuccess('Failed to copy.');
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Shorten
                </button>
            </form>
            {shortUrl && (
                <div className="mt-3">
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortUrl}
                    </a>
                    <button className="btn btn-secondary ms-2" onClick={copyToClipboard}>
                        Copy Link
                    </button>
                    {copySuccess && (
                        <div className="mt-2 text-success">
                            {copySuccess}
                        </div>
                    )}
                </div>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
    );
};

export default ShortenForm;
