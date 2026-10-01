import { useEffect, useState } from 'react';
import NavBar from './comp/NavBar'
import Card from './comp/Card';
import heroImage from './img/p2.jpg'
import apiReq from './service/apiService';

const App = () => {


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])


  const highlights = [
    '2025-11-20',
    '2025-11-17',
    '2025-11-07',
    '2025-10-31',
    '2025-10-21',
    '2025-09-29'
  ];

  const [cards, setCard] = useState([]);

  useEffect (() => {
    const buscaHighlights = async () =>{
      const r = await Promise.all(
        highlights.map((date) => apiReq(date))
      );

       setCard(r);
    };
    buscaHighlights();
  },[]);

  console.log("olha aq", cards)
 
 

  return (
    <div className="bg-[#08090d] text-white">

      <NavBar />

      <header className="relative min-h-screen overflow-hidden bg-[#08090d] px-8 py-32 text-white md:px-16"> 
        <img src={heroImage} alt="foto do ceu estrelado"
        className='absolute inset-0 h-full w-full object-cover' 
        style={{transform:`translateY(${scrollY * 0.2}px)`}} />




        <div className='relative z-10'>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-violet-400">Beyond the stars</p>
          <h1 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-tight md:text-7xl">A window into the stars.</h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-300 md:text-xl">Discover the beauty and mystery of the universe through images that reveal what lies beyond our world.</p>
          <button className="mt-8 w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-[#08090d] transition hover:-translate-y-1">
            Explore the cosmos →
          </button>
          <p className="mt-20 text-sm text-zinc-400 md:text-base">Beyond the blue, there is a universe waiting to be discovered.</p>
        </div>
        {/* intro / hero */}
      </header>
      <main className='h-screen'>
        {/* highlights
        ultimos 10 dias */}
        <section className='px-8 py-24 md:px-16'>
          <div className='mb-10'>
            <p className='text-sm uppercase tracking-[0.25em] text-violet-400'>
              Highlights
            </p>
            
            <h2 className='mt-3 text-4xl font-medium tracking-tight md:text-5xl'>
              Moments beyond our world.
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {
              cards.map((card) => {
                <Card key={card.date} data={card}/>
              })
            }
          </div>
        </section>
      </main>
      <footer>
        {/* creditos + links */}
      </footer>
    </div>
  )
}

// NASA · ASTRONOMY PICTURE OF THE DAY

export default App;