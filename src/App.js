import React, { useState } from 'react';
import ScriptInput from './components/ScriptInput';
import SceneRenderer from './components/SceneRenderer';
import CharacterCustomization from './components/CharacterCustomization';

function App() {
    const [sceneData, setSceneData] = useState([]);
    const [characterProperties, setCharacterProperties] = useState({
        color: '#ffffff',
        size: 1,
        accessory: 'none',
    });

    const [debugInfo, setDebugInfo] = useState('');

    const handleParseScript = async (script) => {
        try {
            const parseResponse = await fetch('http://localhost:5000/api/parse-script', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ script }),
            });
            const { characters, environments } = await parseResponse.json();

            const modelResponse = await fetch('http://localhost:5000/api/fetch-models', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ characters, environments }),
            });
            const modelData = await modelResponse.json();
            setDebugInfo("Model data: " + JSON.stringify(modelData));

            const sceneObjects = [
                ...modelData.characterModels,
                ...modelData.environmentModels,
            ].flat().filter(model => model.modelUrl);

            setSceneData(sceneObjects.map((model, idx) => ({
                modelUrl: model.modelUrl,
                position: [idx * 2, 0, 0], // Adjust positions for each model
            })));
        } catch (error) {
            console.error('Error fetching models:', error);
            setDebugInfo('Error fetching models: ' + error.message);
        }
    };

    const handleUpdateCharacter = (updatedProperties) => {
        setCharacterProperties(updatedProperties);
    };

    return (
        <div className="app-container">
            <h1>HypenAi - Automated 3D Animation</h1>
            <ScriptInput onParseScript={handleParseScript} />
            {sceneData.length > 0 && (
                <SceneRenderer
                    sceneData={sceneData.map((modelData) => ({
                        ...modelData,
                        ...characterProperties,
                    }))}
                />
            )}
            <CharacterCustomization onUpdateCharacter={handleUpdateCharacter} />

            {/* Debug Info Section */}
            <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <h3>Debug Information</h3>
                <pre>{debugInfo}</pre>
            </div>
        </div>
    );
}

export default App;