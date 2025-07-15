import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';
import * as THREE from 'three';

interface RocketModelProps {
  modelPath: string;
  scale?: number;
}

const RocketModel = ({ modelPath, scale = 1 }: RocketModelProps) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current && !isHovered) {
      meshRef.current.rotation.y += 0.01; // Passive rotation
    }
  });

  return (
    <group
      ref={meshRef}
      scale={[scale, scale, scale]}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <primitive object={scene} />
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

const ErrorFallback = () => (
  <div className="flex items-center justify-center w-full h-64 bg-muted/50 rounded-lg">
    <p className="text-sm text-muted-foreground">Failed to load 3D model</p>
  </div>
);

export const RocketModel3D = ({ modelPath, scale = 1 }: RocketModelProps) => {
  return (
    <div className="w-full">
      {/* Embedded 3D View */}
      <div className="h-64 w-full rounded-lg overflow-hidden border bg-background">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            camera={{ position: [5, 5, 5], fov: 45 }}
            className="cursor-pointer"
          >
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <RocketModel modelPath={modelPath} scale={scale} />
          </Canvas>
        </Suspense>
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
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
          <div className="w-full h-full">
            <Suspense fallback={<LoadingSpinner />}>
              <Canvas
                camera={{ position: [8, 8, 8], fov: 45 }}
                className="w-full h-full"
              >
                <Environment preset="studio" />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <RocketModel modelPath={modelPath} scale={scale} />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={2}
                  maxDistance={20}
                />
              </Canvas>
            </Suspense>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Preload the GLTF model
useGLTF.preload('/ROCKETAssembly_July8.gltf');