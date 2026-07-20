'use client';

import { useRef, useState, type MouseEvent } from 'react';

export const Button = () => {
  const buttonNo = useRef<HTMLButtonElement>(null);

  const [postion, setPosition] = useState<{
    x: null | number;
    y: null | number;
  }>({ x: null, y: null });

  const onEscape = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    let x;
    let y;
    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const rect = buttonNo.current?.getBoundingClientRect() || {
      left: 1,
      width: 1,
    };
    const center = rect.left + rect.width / 2;

    if (event.clientX < center) {
      x = random(180, 260);
    } else {
      x = random(-260, -180);
    }

    y = random(-900, 70);
    console.log(postion);
    if (!buttonNo.current) return;
    setPosition({ x: x, y: y });
    // buttonNo.current.style.transform = `translate(${postion.x}%, ${postion.y}%)`;
  };

  return (
    <button
      ref={buttonNo}
      onMouseEnter={onEscape}
      onClick={onEscape}
      style={{
        transform:
          postion.x !== null && postion.y !== null
            ? `translate(${postion.x}%, ${postion.y}%)`
            : undefined,
      }}
      className='
    
    rounded-full
    border-2
    border-violet-200
    bg-white
    px-8
    py-3
    font-semibold
    text-violet-700
    shadow-md
    transition-transform
    duration-200
    ease-out
  '>
      Não 😔
    </button>
  );
};
