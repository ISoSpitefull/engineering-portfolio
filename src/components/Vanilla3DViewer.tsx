import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

interface Vanilla3DViewerProps {
  modelPath?: string;
  envmap?: string;
  backgroundColor?: string;
  height?: number;
  autoRotate?: boolean;
  cameraControls?: boolean;
  poster?: boolean;
  className?: string;
  modelScale?: number;
}

export const Vanilla3DViewer: React.FC<Vanilla3DViewerProps> = ({
  modelPath = '/ROCKETAssembly_July8.gltf',
  envmap,
  backgroundColor = '#0f172a',
  height = 500,
  autoRotate = true,
  cameraControls = true,
  poster = false,
  className = '',
  modelScale = 1.0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Set background
    scene.background = new THREE.Color(backgroundColor);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / height, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.set(3, 2, 3); // Closer initial position

    // Renderer setup with high quality settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: false, 
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
      stencil: false,
      depth: true
    });
    rendererRef.current = renderer;
    
    // High quality rendering settings
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(containerRef.current.clientWidth, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate = true;
    
    containerRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true; // Enable screen space panning
    controls.minDistance = 0.5; // Allow much closer zoom
    controls.maxDistance = 20;   // Reduced max distance for better control
    controls.maxPolarAngle = Math.PI;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.5;
    controls.zoomSpeed = 1.2;   // Faster zooming
    
    // Set middle mouse button for panning
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.PAN,
      RIGHT: THREE.MOUSE.DOLLY
    };

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    // Rim light
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, -5, 10);
    scene.add(rimLight);

    // Add a subtle ground plane for better shadows
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.ShadowMaterial({ 
      color: 0x000000, 
      transparent: true, 
      opacity: 0.3 
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Add subtle environment lighting for better reflections
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Clock for animations
    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Load model
    const loadModel = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const loader = new GLTFLoader();
        
        // Setup DRACO decoder
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/version/2.0/');
        loader.setDRACOLoader(dracoLoader);

        const gltf = await loader.loadAsync(modelPath);
        
        // Remove previous model
        if (modelRef.current) {
          scene.remove(modelRef.current);
        }

        const model = gltf.scene;
        modelRef.current = model;

        // Apply scaling to the model
        if (modelScale !== 1.0) {
          model.scale.setScalar(modelScale);
        }

        // Enable shadows for all meshes
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(model);

        // Setup animations
        if (gltf.animations && gltf.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(model);
          const action = mixerRef.current.clipAction(gltf.animations[0]);
          action.play();
        }

        // Fit camera to model
        fitCameraToModel(model, camera, controls);

        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load model:', err);
        setError('Failed to load 3D model');
        setIsLoading(false);
      }
    };

    // Fit camera to model function
    const fitCameraToModel = (model: THREE.Group, camera: THREE.PerspectiveCamera, controls: OrbitControls) => {
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.2; // Much closer for detail viewing

      // Better camera positioning for rocket models - closer for detail
      camera.position.set(
        center.x + cameraZ * 0.3,  // More centered
        center.y + cameraZ * 0.15, // Lower angle for better rocket view
        center.z + cameraZ
      );

      controls.target.copy(center);
      controls.minDistance = maxDim * 0.3;  // Allow much closer zoom for details
      controls.maxDistance = cameraZ * 2;    // Reasonable max zoom out
      controls.update();
    };

    // Drag and drop functionality
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      if (containerRef.current) {
        containerRef.current.style.outline = '2px dashed #38bdf8';
      }
    };

    const handleDragLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.outline = '';
      }
    };

    const handleDrop = async (e: DragEvent) => {
      e.preventDefault();
      if (containerRef.current) {
        containerRef.current.style.outline = '';
      }

      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (/\.gl(b|tf)$/i.test(file.name)) {
          const url = URL.createObjectURL(file);
          try {
            const loader = new GLTFLoader();
            const gltf = await loader.loadAsync(url);
            
            if (modelRef.current) {
              scene.remove(modelRef.current);
            }

            const model = gltf.scene;
            modelRef.current = model;

            // Apply scaling to dropped models as well
            if (modelScale !== 1.0) {
              model.scale.setScalar(modelScale);
            }

            model.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            scene.add(model);
            fitCameraToModel(model, camera, controls);
            
            URL.revokeObjectURL(url);
          } catch (err) {
            console.error('Failed to load dropped model:', err);
          }
        }
      }
    };

    // Add event listeners
    containerRef.current.addEventListener('dragover', handleDragOver);
    containerRef.current.addEventListener('dragleave', handleDragLeave);
    containerRef.current.addEventListener('drop', handleDrop);

    // Add double-click to reset camera position
    containerRef.current.addEventListener('dblclick', () => {
      if (modelRef.current && camera && controls) {
        fitCameraToModel(modelRef.current, camera, controls);
      }
    });

    // Load initial model
    loadModel();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      const width = containerRef.current.clientWidth;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelPath, backgroundColor, height, autoRotate, modelScale]);

  // Update controls when props change
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enabled = cameraControls;
    }
  }, [cameraControls]);

  if (error) {
    return (
      <div 
        className={`vanilla-3d-viewer ${className}`}
        style={{
          width: '100%',
          height: height,
          background: `linear-gradient(135deg, ${backgroundColor} 0%, #1e293b 100%)`,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ef4444',
          fontSize: '16px',
          fontWeight: '500'
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`vanilla-3d-viewer ${className}`}
      style={{
        width: '100%',
        height: height,
        background: `linear-gradient(135deg, ${backgroundColor} 0%, #1e293b 100%)`,
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}
    >
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.7)',
          color: '#ffffff',
          fontSize: '16px',
          zIndex: 10
        }}>
          Loading 3D Model...
        </div>
      )}
             <div style={{
         position: 'absolute',
         bottom: '16px',
         left: '16px',
         right: '16px',
         textAlign: 'center',
         color: '#94a3b8',
         fontSize: '12px',
         zIndex: 5
       }}>
         💡 <strong>Tip:</strong> Double-click to reset camera view | Middle mouse to pan
       </div>
    </div>
  );
};
