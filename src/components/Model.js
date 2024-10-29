


// src/components/Model.js
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';

function Model({ modelUrl, position, color, size, accessory }) {
    const gltf = useLoader(GLTFLoader, modelUrl);
    const modelRef = useRef();

    // Adjust the scale and color of the model
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.scale.set(size, size, size);
            modelRef.current.traverse((child) => {
                if (child.isMesh) child.material.color.set(color);
            });
        }
    });

    return (
        <primitive object={gltf.scene} position={position} ref={modelRef}>
            {/* Conditional rendering of accessories can be handled here */}
            {accessory === 'hat' && <mesh /* hat model */ />}
            {accessory === 'glasses' && <mesh /* glasses model */ />}
        </primitive>
    );
}

export default Model;