// src/components/ScriptInput.js
import React, { useState } from 'react';

function ScriptInput({ onParseScript }) {
    const [script, setScript] = useState('');

    const handleParse = (e) => {
e.preventDefault();
        onParseScript(script); // send script to backend for parsing
    };

    return (
        <div>
            <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Enter your script here"
            />
            <button onClick={handleParse}>Parse Script</button>
        </div>
    );
}

export default ScriptInput;