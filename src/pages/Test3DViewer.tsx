import React, { useState } from 'react';
import { Vanilla3DViewer } from '../components/Vanilla3DViewer';

const Test3DViewer: React.FC = () => {
  const [currentModel, setCurrentModel] = useState('/ROCKETAssembly_July8.gltf');
  const [autoRotate, setAutoRotate] = useState(true);
  const [cameraControls, setCameraControls] = useState(true);
  const [height, setHeight] = useState(500);

  const sampleModels = [
    { name: 'Rocket Assembly', path: '/ROCKETAssembly_July8.gltf' },
    { name: 'Damaged Helmet (Sample)', path: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb' },
    { name: 'Duck (Sample)', path: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vanilla 3D Viewer Test
          </h1>
          <p className="text-slate-300 text-lg">
            Test the integrated vanilla web component 3D viewer with drag & drop support
          </p>
        </div>

        {/* Controls */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Model
              </label>
              <select
                value={currentModel}
                onChange={(e) => setCurrentModel(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {sampleModels.map((model) => (
                  <option key={model.path} value={model.path}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Height
              </label>
              <input
                type="range"
                min="300"
                max="800"
                step="50"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-slate-400">{height}px</span>
            </div>

            <div className="flex items-center space-x-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={autoRotate}
                  onChange={(e) => setAutoRotate(e.target.checked)}
                  className="mr-2 rounded border-slate-600 bg-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-sm text-slate-300">Auto Rotate</span>
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={cameraControls}
                  onChange={(e) => setCameraControls(e.target.checked)}
                  className="mr-2 rounded border-slate-600 bg-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-sm text-slate-300">Camera Controls</span>
              </label>
            </div>
          </div>
        </div>

        {/* 3D Viewer */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">3D Model Viewer</h2>
          <Vanilla3DViewer
            modelPath={currentModel}
            height={height}
            autoRotate={autoRotate}
            cameraControls={cameraControls}
            backgroundColor="#0f172a"
          />
          <div className="mt-4 text-center">
            <p className="text-slate-400 text-sm">
              💡 <strong>Tip:</strong> Drag and drop any .glb or .gltf file onto the viewer to load it!
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">Features</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Drag & Drop support for .glb/.gltf files
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Orbit controls with smooth damping
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Auto-rotation and camera positioning
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                High-performance WebGL rendering
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Responsive design with customizable height
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">Usage</h3>
            <div className="bg-slate-900 rounded-lg p-4">
              <code className="text-sm text-slate-300">
                {`<Vanilla3DViewer
  modelPath="/path/to/model.gltf"
  height={500}
  autoRotate={true}
  cameraControls={true}
  backgroundColor="#0f172a"
/>`}
              </code>
            </div>
          </div>
        </div>

        {/* Back to main */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test3DViewer;
