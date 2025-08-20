import React, { useEffect, useRef } from 'react';

interface Vanilla3DViewerProps {
  modelPath?: string;
  envmap?: string;
  backgroundColor?: string;
  height?: number;
  autoRotate?: boolean;
  cameraControls?: boolean;
  poster?: boolean;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'x-3d-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        envmap?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        poster?: boolean;
        style?: React.CSSProperties;
      };
    }
  }
}

export const Vanilla3DViewer: React.FC<Vanilla3DViewerProps> = ({
  modelPath = '/ROCKETAssembly_July8.gltf',
  envmap,
  backgroundColor = '#0f172a',
  height = 500,
  autoRotate = true,
  cameraControls = true,
  poster = false,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoadedRef.current) return;

    const loadScript = async () => {
      try {
        // Dynamically import Three.js and related modules
        const THREE = await import('three');
        const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const { DRACOLoader } = await import('three/examples/jsm/loaders/DRACOLoader.js');
        const { RGBELoader } = await import('three/examples/jsm/loaders/RGBELoader.js');

        // Define the custom element
        class X3DViewer extends HTMLElement {
          static observedAttributes = ['src', 'envmap', 'skybox', 'background', 'exposure', 'camera-controls', 'auto-rotate', 'autoplay', 'animation-index', 'max-dpr', 'loading'];

          private $wrapper: HTMLDivElement;
          private $canvas: HTMLCanvasElement;
          private $ui: HTMLDivElement;
          private renderer: THREE.WebGLRenderer;
          private scene: THREE.Scene;
          private camera: THREE.PerspectiveCamera;
          private controls: OrbitControls;
          private keyLight: THREE.DirectionalLight;
          private fillLight: THREE.AmbientLight;
          private pmrem: THREE.PMREMGenerator;
          private gltfLoader: GLTFLoader;
          private hdrLoader: RGBELoader;
          private _model: THREE.Group | null;
          private _mixer: THREE.AnimationMixer | null;
          private _clock: THREE.Clock;

          constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            
            this.$wrapper = document.createElement('div');
            this.$wrapper.style.cssText = `position:relative; inset:0; width:100%; height:100%; background:transparent;`;

            this.$canvas = document.createElement('canvas');
            this.$canvas.style.cssText = 'display:block; width:100%; height:100%;';

            this.$ui = document.createElement('div');
            this.$ui.style.cssText = `position:absolute; inset:0; pointer-events:none;`;

            this.$wrapper.append(this.$canvas, this.$ui);
            this.shadowRoot!.append(this.$wrapper);

            this.renderer = new THREE.WebGLRenderer({ canvas: this.$canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
            this.renderer.outputColorSpace = THREE.SRGBColorSpace;
            this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
            this.renderer.toneMappingExposure = 1.0;

            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
            this.camera.position.set(2.5, 1.5, 3.0);

            this.controls = new OrbitControls(this.camera, this.$canvas);
            this.controls.enabled = false;
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.zoomSpeed = 0.6;

            this.keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
            this.keyLight.position.set(5, 5, 5);
            this.fillLight = new THREE.AmbientLight(0xffffff, 0.6);
            this.scene.add(this.keyLight, this.fillLight);

            this.pmrem = new THREE.PMREMGenerator(this.renderer);
            this.pmrem.compileEquirectangularShader();
            this.gltfLoader = new GLTFLoader();
            const draco = new DRACOLoader();
            draco.setDecoderPath('https://unpkg.com/three@0.161.0/examples/jsm/libs/draco/');
            this.gltfLoader.setDRACOLoader(draco);
            this.hdrLoader = new RGBELoader();

            this._model = null;
            this._mixer = null;
            this._clock = new THREE.Clock();

            // Drag & Drop support
            this.$wrapper.addEventListener('dragover', (e) => {
              e.preventDefault();
              this.$wrapper.style.outline = '2px dashed #38bdf8';
            });
            this.$wrapper.addEventListener('dragleave', () => {
              this.$wrapper.style.outline = '';
            });
            this.$wrapper.addEventListener('drop', async (e) => {
              e.preventDefault();
              this.$wrapper.style.outline = '';
              const file = e.dataTransfer?.files?.[0];
              if (file && /\.gl(b|tf)$/i.test(file.name)) {
                const url = URL.createObjectURL(file);
                await this._loadModel(url);
                URL.revokeObjectURL(url);
              }
            });

            const loop = () => {
              requestAnimationFrame(loop);
              const dt = this._clock.getDelta();
              if (this.controls.enabled) { this.controls.update(); }
              if (this._mixer) { this._mixer.update(dt); }
              this.renderer.render(this.scene, this.camera);
            };
            loop();
          }

          async _loadModel(url: string) {
            if (!url) return;
            if (this._model) {
              this.scene.remove(this._model);
            }
            try {
              const gltf = await this.gltfLoader.loadAsync(url);
              this._model = gltf.scene;
              this.scene.add(this._model);
              this._clips = gltf.animations || [];
              if (this._clips.length) { this._mixer = new THREE.AnimationMixer(this._model); }
              this.fit();
            } catch (err) {
              console.error('Model load failed', err);
            }
          }

          fit() {
            if (!this._model) return;
            const box = new THREE.Box3().setFromObject(this._model);
            const size = new THREE.Vector3();
            const center = new THREE.Vector3();
            box.getSize(size);
            box.getCenter(center);
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = this.camera.fov * (Math.PI / 180);
            const dist = (maxDim / 2) / Math.tan(fov / 2);
            const offset = 1.2;
            const dir = new THREE.Vector3(1, 0.6, 1).normalize();
            this.camera.position.copy(center.clone().addScaledVector(dir, dist * offset));
            this.controls.target.copy(center);
            this.controls.update();
          }

          connectedCallback() {
            // Load model when element is connected
            const src = this.getAttribute('src');
            if (src) {
              this._loadModel(src);
            }
          }

          attributeChangedCallback(name: string, oldValue: string, newValue: string) {
            if (name === 'src' && newValue && newValue !== oldValue) {
              this._loadModel(newValue);
            }
          }
        }

        // Define the custom element
        if (!customElements.get('x-3d-viewer')) {
          customElements.define('x-3d-viewer', X3DViewer);
        }

        scriptLoadedRef.current = true;
      } catch (error) {
        console.error('Failed to load 3D viewer script:', error);
      }
    };

    loadScript();
  }, []);

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
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}
    >
      <x-3d-viewer
        src={modelPath}
        envmap={envmap}
        camera-controls={cameraControls}
        auto-rotate={autoRotate}
        poster={poster}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};
