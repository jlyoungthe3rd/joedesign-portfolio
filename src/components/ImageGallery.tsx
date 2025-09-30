'use client';

import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  customSize?: 'small' | 'medium' | 'large' | 'extra-large';
}

export interface ImageGalleryRef {
  openLightbox: (index: number) => void;
}

const ImageGallery = forwardRef<ImageGalleryRef, ImageGalleryProps>(
  ({ images, customSize }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
      setCurrentIndex(index);
      setIsOpen(true);
    };

    useImperativeHandle(ref, () => ({
      openLightbox,
    }));

    // Determine responsive grid layout based on image count
    const getGridClasses = () => {
      const count = images.length;

      if (count === 1) {
        return 'grid grid-cols-1 justify-items-center gap-6 max-w-md mx-auto';
      } else if (count === 2) {
        return 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto';
      } else if (count === 3) {
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto';
      } else if (count <= 6) {
        return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto';
      } else {
        return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto';
      }
    };

    // Determine image size based on count and custom size
    const getImageSizeClasses = () => {
      const count = images.length;

      // Handle custom sizing first
      if (customSize === 'small') {
        if (count === 1) {
          return 'relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40';
        } else if (count === 2) {
          return 'relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32';
        } else {
          return 'relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28';
        }
      } else if (customSize === 'large') {
        if (count === 1) {
          return 'relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80';
        } else if (count === 2) {
          return 'relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64';
        } else {
          return 'relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56';
        }
      } else if (customSize === 'extra-large') {
        if (count === 1) {
          return 'relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]';
        } else if (count === 2) {
          return 'relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80';
        } else {
          return 'relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64';
        }
      }

      // Default sizing based on count
      if (count === 1) {
        return 'relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64';
      } else if (count === 2) {
        return 'relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48';
      } else if (count <= 4) {
        return 'relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40';
      } else if (count <= 6) {
        return 'relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32';
      } else {
        return 'relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28';
      }
    };

    // Get the correct sizes attribute based on actual thumbnail dimensions
    const getSizesAttribute = () => {
      const count = images.length;

      // Handle custom sizing sizes
      if (customSize === 'small') {
        if (count === 1) {
          return '(max-width: 640px) 128px, (max-width: 768px) 144px, 160px';
        } else if (count === 2) {
          return '(max-width: 640px) 96px, (max-width: 768px) 112px, 128px';
        } else {
          return '(max-width: 640px) 80px, (max-width: 768px) 96px, 112px';
        }
      } else if (customSize === 'medium') {
        if (count === 1) {
          return '(max-width: 640px) 192px, (max-width: 768px) 224px, 256px';
        } else if (count === 2) {
          return '(max-width: 640px) 160px, (max-width: 768px) 192px, 224px';
        } else {
          return '(max-width: 640px) 128px, (max-width: 768px) 160px, 192px';
        }
      } else if (customSize === 'large') {
        if (count === 1) {
          return '(max-width: 640px) 256px, (max-width: 768px) 288px, 320px';
        } else if (count === 2) {
          return '(max-width: 640px) 192px, (max-width: 768px) 224px, 256px';
        } else {
          return '(max-width: 640px) 160px, (max-width: 768px) 192px, 224px';
        }
      } else if (customSize === 'extra-large') {
        if (count === 1) {
          return '(max-width: 640px) 320px, (max-width: 768px) 384px, 448px';
        } else if (count === 2) {
          return '(max-width: 640px) 256px, (max-width: 768px) 288px, 320px';
        } else {
          return '(max-width: 640px) 192px, (max-width: 768px) 224px, 256px';
        }
      }

      // Default sizes based on count
      if (count === 1) {
        return '(max-width: 640px) 192px, (max-width: 768px) 224px, 256px';
      } else if (count === 2) {
        return '(max-width: 640px) 128px, (max-width: 768px) 160px, 192px';
      } else if (count <= 4) {
        return '(max-width: 640px) 112px, (max-width: 768px) 128px, 160px';
      } else if (count <= 6) {
        return '(max-width: 640px) 96px, (max-width: 768px) 112px, 128px';
      } else {
        return '(max-width: 640px) 80px, (max-width: 768px) 96px, 112px';
      }
    };

    const closeLightbox = () => {
      setIsOpen(false);
    };

    const goToPrevious = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, [images.length]);

    const goToNext = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, [images.length]);

    // Handle keyboard navigation
    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (!isOpen) return;

        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          goToPrevious();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          goToNext();
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isOpen, goToPrevious, goToNext]);

    // Handle mouse wheel navigation
    useEffect(() => {
      const handleWheel = (e: WheelEvent) => {
        if (!isOpen) return;

        e.preventDefault();
        if (e.deltaY > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      };

      if (isOpen) {
        window.addEventListener('wheel', handleWheel, { passive: false });
      }

      return () => window.removeEventListener('wheel', handleWheel);
    }, [isOpen, goToNext, goToPrevious]);

    return (
      <>
        {/* Thumbnail Grid - Responsive Layout */}
        <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
          <div className={getGridClasses()}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${getImageSizeClasses()} cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover'
                  sizes={getSizesAttribute()}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {isOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center'
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className='absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 z-20 transition-all'
              aria-label='Close gallery'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10'
              aria-label='Previous image'
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10'
              aria-label='Next image'
            >
              ›
            </button>

            {/* Current Image */}
            <div
              className='relative max-w-4xl max-h-[80vh] w-full h-full mx-4 cursor-pointer'
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              title='Click to go to next image'
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className='object-contain'
              />
            </div>

            {/* Image Counter */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm'>
              {currentIndex + 1} / {images.length}
            </div>

            {/* Instructions */}
            <div className='absolute bottom-4 right-4 text-white text-xs opacity-70'>
              Click image, use arrows, or scroll to navigate • ESC to close
            </div>
          </div>
        )}
      </>
    );
  }
);

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;