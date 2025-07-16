import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
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
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.3;
      camera.position.set(center.x, center.y, cameraZ + center.z);
      camera.near = 0.01;
      camera.far = 1000;
      camera.updateProjectionMatrix();
      camera.lookAt(center);
      // Controls
      controlsRef.current.target.copy(center);
      controlsRef.current.minDistance = 0;
      controlsRef.current.maxDistance = cameraZ * 10;
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.1;
      controlsRef.current.autoRotate = false;
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

function Loader() {
  return (
    <div style={{
      width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: '#fff', borderRadius: 8
    }}>
      <span>Loading 3D Model...</span>
    </div>
  );
}

function ErrorFallback({ error }: { error?: string }) {
  return (
    <div style={{
      width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: '#fff', borderRadius: 8, flexDirection: 'column'
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
    <div style={{ width: '100%', height: 400, background: backgroundColor, borderRadius: 8, overflow: 'hidden', border: '1px solid #333' }}>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Canvas
            camera={{ position: [0, 0, 2], fov: 45, near: 0.01, far: 1000 }}
            gl={{ preserveDrawingBuffer: true, antialias: true, alpha: false, powerPreference: 'high-performance' }}
            style={{ width: '100%', height: '100%', background: backgroundColor }}
            onCreated={({ gl }) => {
              gl.setClearColor(backgroundColor, 1);
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 7.5]} intensity={1.2} castShadow />
            <OrbitControls ref={controlsRef} makeDefault />
            <FitModel modelPath={modelPath} controlsRef={controlsRef} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

// Preload hook for performance
useGLTF.preload && useGLTF.preload('/ROCKETAssembly_July8.gltf'); 