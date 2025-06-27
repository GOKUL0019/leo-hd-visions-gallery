
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const PhotoCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  // Sample photo descriptions for each face
  const photos = [
    "Wedding Ceremony",
    "Candid Moments", 
    "Traditional Portraits",
    "Pre-Wedding Shoot",
    "Reception Party",
    "Family Portraits"
  ];

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      cubeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group>
      {/* Main rotating cube */}
      <mesh ref={cubeRef} position={[0, 0, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.8}
          wireframe={false}
        />
        
        {/* Photo frame outlines on each face */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(3, 3, 3)]} />
          <lineBasicMaterial color="#FFD700" linewidth={2} />
        </lineSegments>
      </mesh>

      {/* Floating text labels around the cube */}
      {photos.map((photo, index) => (
        <FloatingPhotoLabel 
          key={index} 
          text={photo} 
          position={getPositionForIndex(index)}
          index={index}
        />
      ))}

      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#FFD700" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8B5CF6" />
    </group>
  );
};

const FloatingPhotoLabel = ({ text, position, index }: { 
  text: string; 
  position: [number, number, number];
  index: number;
}) => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      const time = state.clock.elapsedTime;
      textRef.current.position.y = position[1] + Math.sin(time + index) * 0.3;
      textRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.3}
      color="#FFD700"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Poppins-Medium.woff"
    >
      {text}
    </Text>
  );
};

// Helper function to position labels around the cube
const getPositionForIndex = (index: number): [number, number, number] => {
  const radius = 4;
  const angle = (index / 6) * Math.PI * 2;
  return [
    Math.cos(angle) * radius,
    Math.sin(angle) * 2,
    Math.sin(angle) * radius
  ];
};

export default PhotoCube;
