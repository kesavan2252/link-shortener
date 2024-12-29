import React from 'react';
import LinkShortener from './components/LinkShortener';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <h1>Link Shortener</h1>
            <LinkShortener />
        </div>
    );
};

export default App;
