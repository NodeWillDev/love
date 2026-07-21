'use client';

import { useEffect, useState } from 'react';

interface Props {
  date: string;
}

export const Display = (props: Props) => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    // const text = '21/07/2026 • 14:24';
    const text = props.date;
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='mx-auto w-fit rounded-3xl border border-violet-200/60 bg-white/70 px-8 py-6 shadow-xl backdrop-blur-xl'>
        <div className='rounded-3xl border border-violet-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl'>
          <p className='mb-3 text-sm tracking-[0.3em] uppercase text-violet-400'>
            Nosso começo
          </p>

          <h2 className='font-mono text-4xl font-semibold text-violet-800'>
            {display}
            <span className='animate-pulse'>|</span>
          </h2>

          <p className='mt-5 text-slate-500 italic'>
            O dia em que tudo mudou 💜
          </p>
        </div>
      </div>
    </>
  );
};
