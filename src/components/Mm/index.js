import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Mm(props) {
  const { nodes, materials } = useGLTF('/mmredglb.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['SVGMat.001']}
      />
    </group>
  );
}
export default function App() {
  return (
    <Canvas
      style={{ height: `340px` }}
      shadows
      camera={{ position: [0, 20, 4], fov: -10 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls autoRotate />
      <Suspense fallback={null}>
        <Mm />
      </Suspense>
    </Canvas>
  );
}
