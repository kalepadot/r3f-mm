import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      {/* <boxGeometry args={[1, 1, 1]} /> */}

      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
function Mm(props) {
  const { nodes, materials } = useGLTF('/mm.glb');

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
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <OrbitControls />
      <Suspense fallback={null}>
        <Mm />
      </Suspense>
    </Canvas>
  );
}
