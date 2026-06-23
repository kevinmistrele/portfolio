import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import type { Group, Points as ThreePoints } from "three";

function createParticlePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const radius = 4 + Math.random() * 6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }

  return positions;
}

function ParticleField() {
  const pointsRef = useRef<ThreePoints>(null);
  const positions = useMemo(() => createParticlePositions(900), []);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={pointsRef} positions={positions} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#5eead4"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function FloatingCore() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.25;
    groupRef.current.rotation.z += delta * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <group ref={groupRef}>
        <Icosahedron args={[1.6, 1]}>
          <meshStandardMaterial
            color="#6366f1"
            roughness={0.25}
            metalness={0.7}
            wireframe
          />
        </Icosahedron>
        <Icosahedron args={[1.1, 0]}>
          <meshStandardMaterial
            color="#5eead4"
            roughness={0.15}
            metalness={0.6}
            emissive="#14b8a6"
            emissiveIntensity={0.35}
          />
        </Icosahedron>
      </group>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      className="hero-scene"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} />
      <pointLight position={[-5, -3, -2]} intensity={1.2} color="#6366f1" />
      <Suspense fallback={null}>
        <FloatingCore />
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}
