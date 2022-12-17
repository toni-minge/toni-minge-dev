import { Suspense, useEffect, useRef } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

const Lights = () => {
  const fbx = useLoader(FBXLoader, "/3d/antonio_002_lights.fbx");

  fbx.children[0].intensity = 2
  fbx.children[1].intensity = 2
  fbx.children[2].intensity = 0.2

  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive
        object={fbx}
        scale={0.2} />
    </>
  )
}

const Antonio = () => {
  const hasMouse = 'onmousemove' in window

  if (hasMouse) {
    useEffect(() => {
      // Set up the mouse move event listener
      window.addEventListener('mousemove', onMouseMove);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }, []); // Only run the effect once
  }


  const antonioRef = useRef();
  // location of the 3D model
  const fbx = useLoader(FBXLoader, "/3d/antonio_002_model.fbx");

  useFrame(() => {
    if (!hasMouse) {
      antonioRef.current.rotation.y += 0.01
    }
  });

  function onMouseMove(event) {
    // Calculate the mouse position in pixels
    var x = event.clientX / window.innerWidth;
    var y = event.clientY / window.innerHeight;

    // Define the range of values that you want to map the mouse position to
    var minX = -2.8;
    var maxX = -1.1;
    var minY = 0;
    var maxY = 5;

    // Normalize the mouse position to the desired range
    var normalizedX = (x - minX) / (maxX - minX);
    var normalizedY = (y - minY) / (maxY - minY);

    antonioRef.current.rotation.x = normalizedY * Math.PI;
    antonioRef.current.rotation.y = normalizedX * Math.PI;
  }

  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive
        rotation-y={Math.PI * 0.25}
        ref={antonioRef}
        object={fbx}
        scale={0.12} />
    </>
  );
};

const ModelViewer = () => {
  useEffect(() => {
    // component did mount
    return () => {
      // component unmount
    }
  }, [])

  return (
    <div className="h-full w-full">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.04} />


        <Suspense fallback={null}>
          <Antonio />
          <Lights />
          {/* To add environment effect to the model */}

        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelViewer
