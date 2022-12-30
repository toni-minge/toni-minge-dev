import { Suspense, useEffect, useRef } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

const Lights = () => {
  const fbx = useLoader(FBXLoader, "/3d/antonio_003_lights.fbx");

  fbx.children[0].intensity = 1
  fbx.children[1].intensity = 2
  fbx.children[2].intensity = 0.1


  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive
        object={fbx}
        scale={10} />
    </>
  )
}

const Duck = ({path}) => {
  const sceneRef = useRef();
  // location of the 3D model
  const fbx = useLoader(FBXLoader, path);



  useFrame(() => {
      sceneRef.current.rotation.z += 0.005
  });

  console.log(fbx)

  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive
        ref={sceneRef}
        object={fbx}
        scale={15} />
    </>
  );
};

const ModelViewer = ({path}) => {

  return (
    <div style={{height: "300px"}} className="w-full">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [15, 10, 10], fov: 50 }}>
        <ambientLight intensity={0.15} />

        <Suspense fallback={null}>
          <Duck path={path}/>
          <Lights />
          {/* To add environment effect to the model */}

        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelViewer
