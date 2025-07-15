import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, AlertTriangle } from 'lucide-react';

interface Fallback3DProps {
  title?: string;
  description?: string;
  error?: string;
}

export const Fallback3D = ({ 
  title = "3D Model Preview", 
  description = "Interactive 3D model would appear here",
  error 
}: Fallback3DProps) => {
  return (
    <div className="w-full h-64 border rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center space-y-4">
        {error ? (
          <>
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{error}</p>
              <p className="text-xs text-gray-400">Your device may not support WebGL</p>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <Rocket className="h-16 w-16 text-blue-400 mx-auto animate-pulse" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                <span>•</span>
                <span>360° Rotation</span>
                <span>•</span>
                <span>Zoom & Pan</span>
                <span>•</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};