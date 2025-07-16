import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Loader2, AlertTriangle } from 'lucide-react';
import * as THREE from 'three';
import { Fallback3D } from './Fallback3D';

interface RocketModelProps {
  modelPath: string;
  scale?: number;
}

const RocketModel = ({ modelPath, scale = 1 }: RocketModelProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  let gltf;
  try {
    gltf = useGLTF(modelPath);
  } catch (err) {
    console.error('Error loading GLTF:', err);
    return null;
  }

  useFrame(() => {
    if (meshRef.current && !isHovered) {
      meshRef.current.rotation.y += 0.005; // Slower rotation
    }
  });

  if (!gltf?.scene) {
    return null;
  }

  return (
    <group
      ref={meshRef}
      scale={[scale, scale, scale]}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <primitive object={gltf.scene.clone()} />
    </group>
  );
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-64 bg-muted/50 rounded-lg">
    <div className="flex flex-col items-center gap-3">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Loading 3D model...</p>
    </div>
  </div>
);

const ErrorFallback = ({ error }: { error?: string }) => (
  <div className="flex items-center justify-center w-full h-64 bg-muted/50 rounded-lg">
    <div className="flex flex-col items-center gap-3">
      <AlertTriangle className="h-8 w-8 text-destructive" />
      <p className="text-sm text-muted-foreground">{error || 'Failed to load 3D model'}</p>
      <p className="text-xs text-muted-foreground">WebGL may not be supported on this device</p>
    </div>
  </div>
);

class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Three.js Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const CanvasWrapper = ({ children, camera, className, ...props }: any) => {
  return (
    <ThreeErrorBoundary fallback={<ErrorFallback />}>
      <Canvas
        camera={camera}
        className={className}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor('#1e293b', 1);
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
        {...props}
      >
        {children}
      </Canvas>
    </ThreeErrorBoundary>
  );
};

export const RocketModel3D = ({ modelPath, scale = 1 }: RocketModelProps) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL support
  React.useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <ErrorFallback error="WebGL is not supported on this device" />;
  }

  return (
    <div className="w-full">
      {/* Embedded 3D View */}
      <div className="h-64 w-full rounded-lg overflow-hidden border bg-background">
        <Suspense fallback={<LoadingSpinner />}>
          <CanvasWrapper
            camera={{ position: [0.05, 0.05, 0.05], fov: 60 }}
            className="cursor-pointer"
            fallback={<Fallback3D error="Failed to initialize 3D viewer" />}
          >
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            <RocketModel modelPath={modelPath} scale={scale} />
          </CanvasWrapper>
        </Suspense>
      </div>

      {/* Fallback Message */}
      <div className="mt-2 text-center">
        <p className="text-xs text-muted-foreground">
          If the 3D model doesn't load, your device may not support WebGL
        </p>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="mt-2">
            <button className="w-full px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              View in Fullscreen
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-slate-900">
          <DialogTitle className="sr-only">3D Rocket Model Viewer</DialogTitle>
          <div className="w-full h-full bg-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <CanvasWrapper
                camera={{ position: [0.1, 0.1, 0.1], fov: 60 }}
                className="w-full h-full"
              >
                <Environment preset="city" />
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                <pointLight position={[-10, -10, -5]} intensity={0.8} />
                <spotLight position={[0, 10, 0]} intensity={1.0} castShadow />
                <RocketModel modelPath={modelPath} scale={scale} />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={0.2}
                  maxDistance={5}
                  dampingFactor={0.05}
                  enableDamping={true}
                />
              </CanvasWrapper>
            </Suspense>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Preload the GLTF model with error handling
try {
  useGLTF.preload('/ROCKETAssembly_July8.gltf');
} catch (error) {
  console.warn('Failed to preload GLTF model:', error);
}