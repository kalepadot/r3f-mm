import React, { useRef, useState, Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { render } from 'react-dom';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
extend({ EffectComposer, RenderPass, UnrealBloomPass });
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
// function Bloom({ children }) {
//   const { gl, camera, size } = useThree();
//   const [scene, setScene] = useState();
//   const composer = useRef();
//   useEffect(
//     () => void scene && composer.current.setSize(size.width, size.height),
//     [size],
//   );
//   useFrame(() => scene && composer.current.render(), 1);
//   return (
//     <>
//       <scene ref={setScene}>{children}</scene>
//       <effectComposer ref={composer} args={[gl]}>
//         <renderPass attachArray="passes" scene={scene} camera={camera} />
//         <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
//       </effectComposer>
//     </>
//   );
// }
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
        {/* <Bloom> */}
        <Mm />
        {/* </Bloom> */}
      </Suspense>
    </Canvas>
  );
}
