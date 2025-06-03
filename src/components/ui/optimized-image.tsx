import { useState, useEffect } from "react";
import { cn, shimmer, toBase64 } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(
    `data:image/svg+xml;base64,${toBase64(shimmer(width || 700, height || 475))}`
  );

  useEffect(() => {
    // Create a new image object
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <img
      {...props}
      alt={alt}
      src={currentSrc}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={cn(
        "duration-700 ease-in-out",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0",
        className
      )}
    />
  );
} 