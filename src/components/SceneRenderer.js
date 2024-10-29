// src/components/SceneRenderer.js
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './Model'; // Component to load models

function SceneRenderer({ sceneData }) {
    return (
        <Canvas>
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