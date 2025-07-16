import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface GLTFViewerProps {
  modelPath: string;
  scale?: number;
  backgroundColor?: string;
}

function Model({ modelPath, scale = 1 }: { modelPath: string; scale?: number }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={group} object={scene} scale={scale} />;
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

export const GLTFViewer: React.FC<GLTFViewerProps> = ({ modelPath, scale = 1, backgroundColor = '#222b3a' }) => {
  // WebGL support check
  const [hasWebGL, setHasWebGL] = React.useState(true);
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
            camera={{ position: [0.5, 0.5, 1.5], fov: 45 }}
            gl={{ preserveDrawingBuffer: true, antialias: true, alpha: false, powerPreference: 'high-performance' }}
            style={{ width: '100%', height: '100%', background: backgroundColor }}
            onCreated={({ gl }) => {
              gl.setClearColor(backgroundColor, 1);
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
          >
            {/* Lighting similar to three-gltf-viewer default */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 7.5]} intensity={1.2} castShadow />
            <Model modelPath={modelPath} scale={scale} />
            <OrbitControls enablePan enableZoom enableRotate />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

// Preload hook for performance
useGLTF.preload && useGLTF.preload('/ROCKETAssembly_July8.gltf'); 