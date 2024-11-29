import "./App.css";
import { Route, Routes } from "react-router-dom";
import CubeContainer from "./components/cube/CubeContainer";
import XrCubeContainer from "./components/xr-cube/XrCubeContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="Ar/" element={<XrCubeContainer />} />
        <Route path="Ar/cube" element={<CubeContainer />} />
        <Route path="Ar/xr-cube" element={<XrCubeContainer />} />
      </Routes>
    </>
  );
}

export default App;
