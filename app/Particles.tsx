'use client';

import { useEffect, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Particles = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted &&
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
        ))}
      {props.children}
    </>
  );
};
