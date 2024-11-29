import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useState } from "react";
import XrGallery from "./XrGallery";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  const [overlayContent, setOverlayContent] = useState(null);

  return (
    <>
      <ARButton
        className="ar-button"
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: ["dom-overlay"],
          domOverlay: { root: overlayContent },
        }}
      />
      <Canvas>
        <XR>
          <OrbitControls />
          <ambientLight />
          <XrGallery />
        </XR>
      </Canvas>
    </>
  );
}
