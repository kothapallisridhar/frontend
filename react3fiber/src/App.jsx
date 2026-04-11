import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import CustomObject from "./CustomObject";

function App() {
  return (
    <Canvas>
      <Experience />
      <CustomObject/>
    </Canvas>
  );
}

export default App;
