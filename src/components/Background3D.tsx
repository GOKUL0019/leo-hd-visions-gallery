
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#f59e0b"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function FloatingCubes() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      {Array.from({ length: 5 }, (_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 2) * 3,
            Math.sin(i * 3) * 2,
            Math.sin(i * 1.5) * 3
          ]}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial
            color="#f59e0b"
            transparent
            opacity={0.6}
            emissive="#f59e0b"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingParticles />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}
