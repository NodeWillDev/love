import { supabase } from './client';
import { Content } from './Content';
import { Display } from './Display';
import { Particles } from './Particles';

const Home = async () => {
  const data = (await supabase.from('love').select().limit(1).single()).data;
  const time = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-[#f3e8ff] via-[#e9d5ff] to-[#fce7f3]'>
      <Particles>
        {data?.created_at ? (
          <Display
            date={time.format(new Date(data.created_at)).replace(',', ' •')}
          />
        ) : (
          <Content />
        )}
      </Particles>
    </main>
  );
};
export default Home;
