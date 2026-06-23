import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  Points,
  PointMaterial,
  Torus,
  Sparkles,
  MeshDistortMaterial,
} from "@react-three/drei";
import type { Group, Points as ThreePoints } from "three";
import * as THREE from "three";

function createParticlePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const radius = 5 + Math.random() * 5;
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
  const positions = useMemo(() => createParticlePositions(1400), []);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.015;
  });

  return (
    <Points ref={pointsRef} positions={positions} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#5eead4"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

function OrbitingRings() {
  const ring1Ref = useRef<Group>(null);
  const ring2Ref = useRef<Group>(null);
  const ring3Ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.38;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.24;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.19;
  });

  return (
    <group>
      <group ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <Torus args={[2.4, 0.022, 12, 100]}>
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={3.0}
            roughness={0.1}
            metalness={0.8}
          />
        </Torus>
      </group>
      <group ref={ring2Ref} rotation={[Math.PI / 6, Math.PI / 3, Math.PI / 4]}>
        <Torus args={[3.1, 0.016, 12, 120]}>
          <meshStandardMaterial
            color="#5eead4"
            emissive="#5eead4"
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={0.6}
          />
        </Torus>
      </group>
      <group ref={ring3Ref} rotation={[Math.PI / 2, Math.PI / 5, Math.PI / 7]}>
        <Torus args={[3.8, 0.012, 12, 140]}>
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={2.0}
            roughness={0.1}
            metalness={0.5}
          />
        </Torus>
      </group>
    </group>
  );
}

function FloatingCore() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.z += delta * 0.055;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.0}>
      <group ref={groupRef}>
        <Icosahedron args={[1.65, 1]}>
          <meshStandardMaterial
            color="#6366f1"
            roughness={0.12}
            metalness={0.9}
            wireframe
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </Icosahedron>
        <Icosahedron args={[1.1, 0]}>
          <MeshDistortMaterial
            color="#5eead4"
            roughness={0.05}
            metalness={0.75}
            emissive="#14b8a6"
            emissiveIntensity={0.7}
            distort={0.28}
            speed={1.8}
          />
        </Icosahedron>
      </group>
    </Float>
  );
}

function MouseTracker() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const pointer = state.pointer;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.28,
      0.045
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.1,
      0.045
    );
  });

  return (
    <group ref={groupRef}>
      <FloatingCore />
      <OrbitingRings />
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      className="hero-scene"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.3,
      }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={1.0} color="#ffffff" />
      <pointLight position={[-5, -3, -2]} intensity={3.0} color="#6366f1" />
      <pointLight position={[5, 3, 2]} intensity={2.2} color="#5eead4" />
      <pointLight position={[0, -5, 3]} intensity={1.4} color="#a855f7" />
      <Suspense fallback={null}>
        <MouseTracker />
        <ParticleField />
        <Sparkles
          count={90}
          size={1.1}
          speed={0.22}
          opacity={0.55}
          color="#5eead4"
          scale={[14, 14, 14]}
        />
      </Suspense>
    </Canvas>
  );
}
