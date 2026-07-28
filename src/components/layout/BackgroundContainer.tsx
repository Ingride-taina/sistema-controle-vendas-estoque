'use client';

import React from 'react';

interface BackgroundContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function BackgroundContainer({ children, className = '' }: BackgroundContainerProps) {
  return (
    <div 
      className={`min-h-screen flex flex-col ${className}`}
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: '#F8FAFC', // fallback
      }}
    >
   
      <div className="flex-1 min-h-screen backdrop-blur-[2px]">
        {children}
      </div>
    </div>
  );
}