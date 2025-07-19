import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  AccumulativeShadows, 
  RandomizedLight,
  ContactShadows,
  useHelper,
  Center
} from '@react-three/drei';
import * as THREE from 'three';

interface GLTFViewerProps {
  modelPath: string;
  backgroundColor?: string;
}

function FitModel({ modelPath, controlsRef }: { modelPath: string; controlsRef: React.RefObject<any> }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);
  const { camera, size } = useThree();
  const [fitted, setFitted] = useState(false);

  useEffect(() => {
    if (!scene || !group.current) return;
    if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera && controlsRef.current) {
      const box = new THREE.Box3().setFromObject(scene);
      const sizeVec = new THREE.Vector3();
      box.getSize(sizeVec);
      const center = new THREE.Vector3();
      box.getCenter(center);
      const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z);
      const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
      
      // Better camera positioning - closer and more dramatic angle
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 0.8; // Closer view
      
      // Position camera at an angle for better perspective
      camera.position.set(
        center.x + cameraZ * 0.3, 
        center.y + cameraZ * 0.2, 
        center.z + cameraZ
      );
      
      camera.near = 0.01;
      camera.far = 1000;
      camera.updateProjectionMatrix();
      camera.lookAt(center);
      
      // Improved controls
      controlsRef.current.target.copy(center);
      controlsRef.current.minDistance = maxDim * 0.5;
      controlsRef.current.maxDistance = cameraZ * 3;
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.05;
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 0.5;
      controlsRef.current.enablePan = true;
      controlsRef.current.enableZoom = true;
      controlsRef.current.update();
      setFitted(true);
    }
  }, [scene, camera, controlsRef, size]);

  useEffect(() => {
    if (group.current) {
      const box = new THREE.Box3().setFromObject(group.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      group.current.position.x -= center.x;
      group.current.position.y -= center.y;
      group.current.position.z -= center.z;
    }
  }, [scene]);

  return <primitive ref={group} object={scene} />;
}

// Enhanced lighting component
function EnhancedLighting() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  
  // Optional: Add helper for debugging lights
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'red');
  // useHelper(spotLightRef, THREE.SpotLightHelper, 1, 'blue');

  return (
    <>
      {/* Main ambient light for overall illumination */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Key directional light for main shadows and highlights */}
      <directionalLight
        ref={directionalLightRef}
        position={[10, 10, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill light from opposite side */}
      <directionalLight
        position={[-8, 5, -5]}
        intensity={0.8}
        color="#e0e0ff"
        castShadow
      />
      
      {/* Rim light for edge definition */}
      <directionalLight
        position={[0, -5, 10]}
        intensity={0.6}
        color="#ffffee"
      />
      
      {/* Spot light for dramatic effect */}
      <spotLight
        ref={spotLightRef}
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.0}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      {/* Point lights for additional detail */}
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#ffffee" />
      <pointLight position={[-5, -5, -5]} intensity={0.2} color="#e0e0ff" />
    </>
  );
}

function Loader() {
  return (
    <div style={{
      width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: '#fff', borderRadius: 8
    }}>
      <span>Loading 3D Model...</span>
    </div>
  );
}

function ErrorFallback({ error }: { error?: string }) {
  return (
    <div style={{
      width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: '#fff', borderRadius: 8, flexDirection: 'column'
    }}>
      <span style={{ color: '#ff5555', fontWeight: 'bold' }}>Failed to load 3D Model</span>
      <span style={{ fontSize: 12, marginTop: 8 }}>{error || 'Check your file path or browser compatibility.'}</span>
    </div>
  );
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    // eslint-disable-next-line no-console
    console.error('GLTFViewer Error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

export const GLTFViewer: React.FC<GLTFViewerProps> = ({ modelPath, backgroundColor = '#222b3a' }) => {
  // WebGL support check
  const [hasWebGL, setHasWebGL] = React.useState(true);
  const controlsRef = useRef<any>(null);
  React.useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <ErrorFallback error="WebGL is not supported on this device." />;
  }

  return (
    <div style={{ 
      width: '100%', 
      height: 500, 
      background: `linear-gradient(135deg, ${backgroundColor} 0%, #2d3748 100%)`, 
      borderRadius: 8, 
      overflow: 'hidden', 
      border: '1px solid #333',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Canvas
            camera={{ position: [0, 0, 2], fov: 45, near: 0.01, far: 1000 }}
            gl={{ 
              preserveDrawingBuffer: true, 
              antialias: true, 
              alpha: false, 
              powerPreference: 'high-performance',
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.2,
              outputColorSpace: THREE.SRGBColorSpace
            }}
            style={{ width: '100%', height: '100%', background: backgroundColor }}
            onCreated={({ gl, scene }) => {
              gl.setClearColor(backgroundColor, 1);
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
              gl.outputColorSpace = THREE.SRGBColorSpace;
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.2;
              
              // Enable better shadows
              scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                }
              });
            }}
          >
            {/* Enhanced lighting setup */}
            <EnhancedLighting />
            
            {/* Environment for reflections and ambient lighting */}
            <Environment preset="studio" background={false} />
            
            {/* Contact shadows for grounding */}
            <ContactShadows 
              position={[0, -0.5, 0]} 
              opacity={0.5} 
              scale={10} 
              blur={1} 
              far={4} 
            />
            
            {/* Orbit controls */}
            <OrbitControls 
              ref={controlsRef} 
              makeDefault 
              enableDamping={true}
              dampingFactor={0.05}
              autoRotate={true}
              autoRotateSpeed={0.5}
              enablePan={true}
              enableZoom={true}
              minPolarAngle={0}
              maxPolarAngle={Math.PI}
            />
            
            {/* Center the model and fit it properly */}
            <Center>
              <FitModel modelPath={modelPath} controlsRef={controlsRef} />
            </Center>
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

// Preload hook for performance
useGLTF.preload && useGLTF.preload('/ROCKETAssembly_July8.gltf'); 