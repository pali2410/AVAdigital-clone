import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Add type definitions for R3F elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
    }
  }
}

interface ParticleHandProps {
  color?: string;
  scrollProgress?: number;
}

export const ParticleHand: React.FC<ParticleHandProps> = ({ color = "black", scrollProgress = 0 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create a TorusKnot geometry to simulate a complex organic/digital shape
  // closer to the "hand" vibe in the video which is a point cloud
  const particles = useMemo(() => {
    const geometry = new THREE.TorusKnotGeometry(10, 3, 150, 20, 2, 3);
    const count = geometry.attributes.position.count;
    const positions = new Float32Array(count * 3);
    
    // Add some noise to positions to make it look more like a scanned point cloud
    for (let i = 0; i < count; i++) {
      const x = geometry.attributes.position.getX(i);
      const y = geometry.attributes.position.getY(i);
      const z = geometry.attributes.position.getZ(i);
      
      positions[i * 3] = x + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.5;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Rotation based on time and scroll
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
      
      // Gentle floating
      pointsRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.15}
        color={color}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};