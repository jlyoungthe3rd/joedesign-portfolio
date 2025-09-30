'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ src, isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyPress);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4'>
      {/* Close Button */}
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10'
        aria-label='Close video'
      >
        ×
      </button>

      {/* Video Container */}
      <div className='relative max-w-4xl w-full max-h-[80vh] bg-black rounded-lg overflow-hidden shadow-2xl'>
        <video
          className='w-full h-full'
          autoPlay
          loop
          muted
          playsInline
          controls
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Click outside to close */}
      <div 
        className='absolute inset-0 -z-10'
        onClick={onClose}
      />
    </div>
  );
}