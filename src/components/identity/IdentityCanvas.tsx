"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function ChromeCherry() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const update = (event: PointerEvent) => {
      pointer.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      };
    };
    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);

  useFrame((_state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.current.x * 0.34,
      4,
      delta,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.current.y * 0.18,
      4,
      delta,
    );
    const time = performance.now() / 1000;
    group.current.rotation.z = Math.sin(time * 0.35) * 0.035;
    group.current.position.y = Math.sin(time * 0.75) * 0.08;
  });

  return (
    <group ref={group} rotation={[0.08, -0.2, -0.06]} scale={1.08}>
      <mesh position={[-0.82, -0.4, 0]} scale={[1.15, 1.2, 1]}>
        <sphereGeometry args={[1.08, 72, 72]} />
        <meshPhysicalMaterial color="#b9b8b6" metalness={1} roughness={0.12} />
      </mesh>
      <mesh position={[0.86, -0.38, 0.12]} scale={[1.13, 1.18, 1]}>
        <sphereGeometry args={[1.08, 72, 72]} />
        <meshPhysicalMaterial color="#d5d2cd" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[-0.92, -0.42, 0.9]} scale={0.68}>
        <sphereGeometry args={[0.78, 56, 56]} />
        <meshPhysicalMaterial
          color="#a20f24"
          metalness={0.42}
          roughness={0.16}
          clearcoat={1}
        />
      </mesh>
      <mesh position={[0.96, -0.4, 1]} scale={0.65}>
        <sphereGeometry args={[0.78, 56, 56]} />
        <meshPhysicalMaterial
          color="#a20f24"
          metalness={0.42}
          roughness={0.16}
          clearcoat={1}
        />
      </mesh>
      <mesh position={[-0.28, 1.08, 0]} rotation={[0, 0, -0.36]}>
        <cylinderGeometry args={[0.075, 0.105, 2.55, 22]} />
        <meshPhysicalMaterial
          color="#575957"
          metalness={0.9}
          roughness={0.22}
        />
      </mesh>
      <mesh position={[0.46, 1.1, 0.05]} rotation={[0, 0, 0.45]}>
        <cylinderGeometry args={[0.065, 0.1, 2.45, 22]} />
        <meshPhysicalMaterial
          color="#666863"
          metalness={0.88}
          roughness={0.23}
        />
      </mesh>
      <mesh
        position={[0.16, 2.25, 0.02]}
        rotation={[0.15, -0.25, 0.45]}
        scale={[1.3, 0.46, 0.12]}
      >
        <sphereGeometry args={[0.88, 52, 52]} />
        <meshPhysicalMaterial
          color="#6d1625"
          metalness={0.45}
          roughness={0.3}
          clearcoat={0.8}
        />
      </mesh>
    </group>
  );
}

export function IdentityCanvas() {
  return (
    <Canvas
      className="identity-stage__canvas"
      camera={{ fov: 33, position: [0, 0.15, 7.5] }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.4} />
      <directionalLight color="#fff7eb" intensity={4.2} position={[3, 5, 6]} />
      <pointLight color="#bf1230" intensity={38} position={[-4, -2, 3]} />
      <pointLight color="#dce8ff" intensity={28} position={[4, 0, 2]} />
      <ChromeCherry />
    </Canvas>
  );
}
