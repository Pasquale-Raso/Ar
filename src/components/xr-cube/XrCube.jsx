import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const XrCube = () => {
  const cubeRef = useRef();
  useFrame(({ state, delta }) => {
    // console.log(cubeRef);
    cubeRef.current.rotation.y += 0.01;
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef} position={[0, 0, -5]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
};

export default XrCube;
