// src/components/CustomizationPanel.js
import React, { useState } from 'react';

function CharacterCustomization({ onUpdateCharacter }) {
    const [color, setColor] = useState('#ffffff');
    const [size, setSize] = useState(1);
    const [accessory, setAccessory] = useState('hat');

    const handleUpdate = () => {
        onUpdateCharacter({ color, size, accessory });
    };

    return (
        <div className="customization-panel">
            <h3>Customize Character</h3>
            <label>
                Color:
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </label>
            <label>
                Size:
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={size}
                    onChange={(e) => setSize(parseFloat(e.target.value))}
                />
            </label>
            <label>
                Accessory:
                <select
                    value={accessory}
                    onChange={(e) => setAccessory(e.target.value)}
                >
                    <option value="hat">Hat</option>
                    <option value="glasses">Glasses</option>
                    <option value="none">None</option>
                </select>
            </label>
            <button onClick={handleUpdate}>Update Character</button>
        </div>
    );
}

export default CharacterCustomization;