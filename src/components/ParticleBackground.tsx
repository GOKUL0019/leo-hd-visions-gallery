
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleBackground = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particles
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      // Random positions in a sphere
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Golden color variations
      colors[i * 3] = 1; // Red
      colors[i * 3 + 1] = 0.8 + Math.random() * 0.2; // Green
      colors[i * 3 + 2] = 0.1 + Math.random() * 0.3; // Blue
    }
    
    return [positions, colors];
  }, []);

  // Animate particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group>
      {/* Ambient light */}
      <ambientLight intensity={0.2} />
      
      {/* Point light */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
      
      {/* Animated particles */}
      <Points ref={ref} positions={positions} colors={colors}>
        <PointMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      
      {/* Additional floating orbs */}
      <FloatingOrbs />
    </group>
  );
};

const FloatingOrbs = () => {
  const orbRefs = useRef<(THREE.Mesh | null)[]>([]);
  
  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      scale: 0.1 + Math.random() * 0.2,
      speed: 0.5 + Math.random() * 0.5,
      offset: i * Math.PI * 0.25
    }));
  }, []);

  useFrame((state) => {
    orbRefs.current.forEach((orb, i) => {
      if (orb) {
        const orbData = orbs[i];
        orb.position.y = orbData.position[1] + Math.sin(state.clock.elapsedTime * orbData.speed + orbData.offset) * 2;
        orb.position.x = orbData.position[0] + Math.cos(state.clock.elapsedTime * orbData.speed * 0.5 + orbData.offset) * 1;
        orb.rotation.x = state.clock.elapsedTime * 0.3;
        orb.rotation.y = state.clock.elapsedTime * 0.2;
      }
    });
  });

  return (
    <>
      {orbs.map((orb, i) => (
        <mesh
          key={i}
          ref={(el) => (orbRefs.current[i] = el)}
          position={orb.position}
          scale={orb.scale}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={0.2}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </>
  );
};

export default ParticleBackground;
