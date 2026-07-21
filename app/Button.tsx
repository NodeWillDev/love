'use client';

import { useRef, useState, type MouseEvent, type RefObject } from 'react';

interface Props {
  containerRef: RefObject<HTMLElement | null>;
}

export const Button = (props: Props) => {
  const buttonNo = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState<{
    x: null | number;
    y: null | number;
  }>({ x: null, y: null });
  const onEscape = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    if (!buttonNo.current || !props.containerRef.current) return;

    const button = buttonNo.current;
    const container = props.containerRef.current;

    const containerRect = container.getBoundingClientRect();
    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    let x = 0;
    let y = 0;

    let attempts = 0;

    do {
      const maxX = container.clientWidth - button.offsetWidth;
      const maxY = container.clientHeight - button.offsetHeight;

      x = random(0, maxX);
      y = random(0, maxY);

      attempts++;

      if (attempts > 50) break;
    } while (Math.hypot(x - mouseX, y - mouseY) < 180);

    setPosition({ x, y });
  };

  return (
    <button
      type='button'
      ref={buttonNo}
      onMouseEnter={onEscape}
      onClick={onEscape}
      style={{
        left: `${!position.x ? '60%' : position.x + 'px'}`,
        top: `${!position.y ? '88%' : position.y + 'px'}`,
      }}
      className='absolute transition-all rounded-full border-2 border-violet-200 bg-white px-8 py-3 font-semibold text-violet-700 shadow-md duration-200 ease-out'>
      Não 😔
    </button>
  );
};
