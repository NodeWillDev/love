import { Button } from './Button';
import { Particles } from './Particles';

export default function Home() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-[#f3e8ff] via-[#e9d5ff] to-[#fce7f3]'>
      {/* Partículas */}
      <Particles />
      {/* Card */}
      <div className='z-10 p-12 w-[90%] max-w-137.5 rounded-3xl border border-white/50 bg-white/70 text-center shadow-2xl shadow-violet-500/20 backdrop-blur-xl'>
        <div className='mb-4 text-5xl'>💜</div>

        <h1 className='mb-4 font-serif text-4xl font-bold text-violet-900'>
          Tenho uma pergunta para você...
        </h1>

        <p className='mb-8 leading-8 text-slate-600'>
          Desde que você entrou na minha vida, meus dias ficaram mais leves,
          mais bonitos e muito mais especiais. Então eu queria te perguntar uma
          coisa:
        </p>

        <h2 className='mb-10 font-serif text-5xl font-bold text-violet-700'>
          Você aceita namorar comigo?
        </h2>

        <div className='relative flex items-center justify-center gap-6'>
          <button className='rounded-full px-8 py-3 bg-violet-600 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-violet-700'>
            Sim 💜
          </button>

          <Button />
        </div>
      </div>
    </main>
  );
}
