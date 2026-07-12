"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function TShirtMesh({ color, design, isFlipped }: { color: string; design: string; isFlipped: boolean }) {
  const meshRef = useRef<THREE.Group>(null!);
  const targetRotation = useRef(0);

  useFrame((_, delta) => {
    if (meshRef.current) {
      targetRotation.current = isFlipped ? Math.PI : 0;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation.current,
        delta * 3
      );
    }
  });

  const mainColor = color === "black" ? "#1a1a1a" : "#f5f5f5";
  const accentColor = color === "black" ? "#ffffff" : "#1a4fbf";

  return (
    <group ref={meshRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.4, 3, 0.15]} />
        <meshStandardMaterial color={mainColor} roughness={0.8} metalness={0.05} />
      </mesh>

      {/* Left Sleeve */}
      <mesh position={[-1.55, 0.7, 0]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[1, 0.8, 0.12]} />
        <meshStandardMaterial color={mainColor} roughness={0.8} metalness={0.05} />
      </mesh>

      {/* Right Sleeve */}
      <mesh position={[1.55, 0.7, 0]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[1, 0.8, 0.12]} />
        <meshStandardMaterial color={mainColor} roughness={0.8} metalness={0.05} />
      </mesh>

      {/* Collar */}
      <mesh position={[0, 1.55, 0]}>
        <torusGeometry args={[0.45, 0.08, 8, 32, Math.PI]} />
        <meshStandardMaterial color={mainColor} roughness={0.7} />
      </mesh>

      {/* Design on front */}
      {!isFlipped && (
        <mesh position={[0, 0.2, 0.08]}>
          <planeGeometry args={[1.8, 2]} />
          <meshStandardMaterial
            color={accentColor}
            roughness={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      )}

      {/* Design placeholder - windmill/distribution icon */}
      {!isFlipped && design === "windmill" && (
        <>
          {/* Windmill cross shape */}
          <mesh position={[0, 0.5, 0.09]}>
            <boxGeometry args={[0.05, 0.8, 0.01]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0.5, 0.09]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.05, 0.8, 0.01]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          {/* Base */}
          <mesh position={[0, -0.1, 0.09]}>
            <coneGeometry args={[0.3, 0.6, 4]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          {/* NL 062 badge */}
          <mesh position={[0.5, 0.9, 0.09]}>
            <planeGeometry args={[0.4, 0.15]} />
            <meshStandardMaterial color="#e67e22" />
          </mesh>
          {/* Raymora text block */}
          <mesh position={[0, -0.7, 0.09]}>
            <planeGeometry args={[1.2, 0.3]} />
            <meshStandardMaterial color="#888888" />
          </mesh>
        </>
      )}

      {!isFlipped && design === "distribution" && (
        <>
          {/* Sale and text */}
          <mesh position={[0, 0.8, 0.09]}>
            <planeGeometry args={[1.4, 0.25]} />
            <meshStandardMaterial color="#1a4fbf" />
          </mesh>
          {/* Distribution text */}
          <mesh position={[0, 0.3, 0.09]}>
            <planeGeometry args={[1.6, 0.35]} />
            <meshStandardMaterial color="#1a4fbf" />
          </mesh>
          {/* Island illustration area */}
          <mesh position={[0, 0.55, 0.09]}>
            <circleGeometry args={[0.3, 32]} />
            <meshStandardMaterial color="#22c55e" />
          </mesh>
          {/* only with text */}
          <mesh position={[0, -0.2, 0.09]}>
            <planeGeometry args={[1.2, 0.4]} />
            <meshStandardMaterial color="#1a4fbf" />
          </mesh>
          {/* Raymora block */}
          <mesh position={[0, -0.7, 0.09]}>
            <planeGeometry args={[1.0, 0.25]} />
            <meshStandardMaterial color="#1a4fbf" />
          </mesh>
        </>
      )}

      {/* Back - empty */}
      {isFlipped && (
        <mesh position={[0, 0, -0.08]}>
          <planeGeometry args={[1.8, 2.5]} />
          <meshStandardMaterial
            color={mainColor}
            roughness={0.9}
          />
        </mesh>
      )}
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#22c55e" wireframe />
    </mesh>
  );
}

interface TShirtViewerProps {
  color: string;
  design: string;
}

export default function TShirtViewer({ color, design }: TShirtViewerProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* 3D Canvas */}
      <div className="w-full h-full rounded-xl overflow-hidden border border-forest-800/30 bg-dark-950">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          shadows
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <directionalLight position={[-3, 3, 2]} intensity={0.3} color="#22c55e" />
          <spotLight position={[0, 5, 0]} intensity={0.5} color="#84cc16" />

          <Suspense fallback={<LoadingFallback />}>
            <TShirtMesh color={color} design={design} isFlipped={isFlipped} />
            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={6} blur={2.5} far={4} />
            <Environment preset="studio" />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>

      {/* Flip Button */}
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-forest-900/80 backdrop-blur-sm border border-forest-700/50 text-sm font-medium text-forest-300 hover:bg-forest-800 hover:text-lime-400 transition-all duration-300 rounded-full flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        {isFlipped ? "View Front" : "View Back"}
      </button>

      {/* Label */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-forest-900/80 backdrop-blur-sm rounded-full text-xs text-forest-300 font-mono">
        {isFlipped ? "Back — Empty" : "Front — Design"}
      </div>
    </div>
  );
}
