import React, { useRef, useState, Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { render } from 'react-dom';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Mm(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/mmpink.glb');
  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
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
      style={{ height: `350px` }}
      shadows
      camera={{ position: [0, 60, 4], fov: -10 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls autoRotate autoRotateSpeed={4} />
      <Suspense fallback={null}>
        <Mm />
      </Suspense>
    </Canvas>
  );
}
