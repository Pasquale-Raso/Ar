import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const cubeRef = useRef();
  useFrame(({ state, delta }) => {
    // console.log(cubeRef);
    cubeRef.current.rotation.y += 0.01;
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
};

export default Cube;
