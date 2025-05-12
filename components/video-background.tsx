"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface VideoBackgroundProps {
  src: string;
  fallbackImage: string;
  priority?: boolean;
  className?: string;
  overlayClassName?: string;
}

export default function VideoBackground({
  src,
  fallbackImage,
  priority = false,
  className = '',
  overlayClassName = ''
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Detect client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // Handle video error
  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Show fallback image if video hasn't loaded yet or had an error */}
      {fallbackImage && (!isClient || !videoLoaded || videoError) && (
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image 
            src={fallbackImage} 
            alt="Background" 
            layout="fill"
            objectFit="cover"
            priority={priority}
          />
        </div>
      )}
      
      {/* Only try to load video on client-side */}
      {isClient && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload={priority ? 'auto' : 'metadata'}
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      <div className={`absolute inset-0 ${overlayClassName}`}></div>
    </div>
  );
}