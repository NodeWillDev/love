'use client';

import { useEffect, useState } from 'react';

export const Particles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted &&
    Array.from({ length: 25 }).map((_, index) => (
      <span
        className='heart'
        key={index}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${6 + Math.random() * 5}s`,
        }}>
        🤍
      </span>
    ))
  );
};
