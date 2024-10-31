import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './Model';

function SceneRenderer({ sceneData }) {
    useEffect(() => {
        console.log("Rendering SceneRenderer with data:", sceneData);
    }, [sceneData]);

    return (
        <Canvas style={{ background: '#cccccc', width: '100vw', height: '100vh' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            {sceneData.map((data, index) => (
                <Model key={index} modelUrl={data.modelUrl} position={data.position} />
            ))}
            <Environment preset="sunset" />
        </Canvas>
    );
}

export default SceneRenderer;