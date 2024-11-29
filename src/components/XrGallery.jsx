import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import Druid from "./Druid";

const XrOverlay = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const { isPresenting } = useXR();
  const [hasPlacedModel, setHasPlacedModel] = useState(false);
  const [isInAR, setIsInAR] = useState(false);

  useEffect(() => {
    if (isPresenting) {
      setIsInAR(true);
    }
  }, [isPresenting]);

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix) => {
    if (reticleRef.current) {
      hitMatrix.decompose(
        reticleRef.current.position,
        reticleRef.current.quaternion,
        reticleRef.current.scale
      );

      reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    }
  });

  const placeModel = () => {
    if (reticleRef.current) {
      let position = reticleRef.current.position.clone();
      let id = Date.now();
      setModels((prevModels) => [...prevModels, { position, id }]);
      setHasPlacedModel(true);
    }
  };

  return (
    <>
      {isPresenting &&
        models.map(({ position, id }) => (
          <Druid key={id} position={position} />
        ))}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}
      {!hasPlacedModel && !isInAR && <Druid position={[0, 0, -2]} />}
    </>
  );
};

export default XrOverlay;
