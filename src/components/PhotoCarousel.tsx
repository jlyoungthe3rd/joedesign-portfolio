'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PhotoCarouselProps {
  photos: string[];
  alt: string;
  className?: string;
}

export default function PhotoCarousel({ photos, alt, className = '' }: PhotoCarouselProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds between transitions

    return () => clearInterval(interval);
  }, [photos.length]);

  if (photos.length === 0) {
    return (
      <div className={`bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`} />
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {photos.map((photo, index) => (
        <div
          key={photo}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={photo}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Optional: Add subtle dots indicator */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {photos.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentPhotoIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}