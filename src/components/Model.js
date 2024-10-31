import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model({ modelUrl, position }) {
    const { scene } = useGLTF(modelUrl, true, (error) => {
        console.error('Error loading model:', error);
    });

    return <primitive object={scene} position={position} />;
}

export default Model;