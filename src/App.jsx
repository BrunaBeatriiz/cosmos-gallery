import { useEffect, useState } from 'react';
import NavBar from './comp/NavBar'
import Card from './comp/Card';
import heroImage from './img/p2.jpg'
import apiReq, { reqDia } from './service/apiService';

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
  }, [])


  // const highlights = [
  //   '2025-11-20',
  //   '2025-11-17',
  //   '2025-11-07',
  //   '2025-10-31',
  //   '2025-10-21',
  //   '2025-09-29'
  // ];

  const [cards, setCard] = useState([]);

  useEffect(() => {
    const buscaHighlights = async () => {
      const r = await apiReq();

      setCard(r);
    };
    buscaHighlights();
  }, []);

  console.log("olha aq", cards);


  const [cardDia, setCardDia] = useState();

  useEffect(() => {
    const busca = async () => {

      const r = await reqDia();

      setCardDia(r);

    }

    busca();
  }, [])

  console.log('olha aqQQQQQQQQQQQQQQQQQQQQ', cardDia)

  return (
    <div className="bg-[#08090d] text-white">

      <NavBar />

      <header className="relative min-h-screen overflow-hidden bg-[#08090d] px-8 py-32 text-white md:px-16">
        <img src={heroImage} alt="foto do ceu estrelado"
          className='absolute inset-0 h-full w-full object-cover'
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} />




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
      <main className=''>
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
            {/* data é uma prop */}
            {
              cards.map((card) => {
                return <Card key={card.date} card={card} />
              })
            }
          </div>
        </section>
        <section className='px-8 py-24 md:px-16 '>

          <div className='mb-10'>
            <p className='text-sm uppercase tracking-[0.25em] text-violet-400'>
              Today's image
            </p>

            <h2 className='mt-3 text-4xl font-medium tracking-tight md:text-5xl'>
              A glimpse into the universe.
            </h2>
          </div>

          {cardDia && (
            <div className='bg-gray-50 w-full flex flex-col items-center mx-auto max-w-6xl gap-3 rounded-lg border border-violet-200/40 p-2 shadow-[0_0_25px_rgba(192,168,255,0.5)] md:flex-row items-center transition duration-300 hover:translate-x-1'>

              <div className='w-full md:w-[66%] flex flex-col items-center'>

                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  {cardDia.title}
                </h2>

                <img
                  src={cardDia.hdurl}
                  alt={cardDia.alt}
                  className="h-96 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className='w-full md:w-[40%] p-1'>
                <p className='text-xs uppercase tracking-[0.25em] text-violet-500'>
                  About this image
                </p>


                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {cardDia.explanation.slice(0, 250)}...
                </p>

                <p className="text-xs uppercase tracking-widest text-gray-500 mt-3">
                  Date: {cardDia.date}
                </p>
                <p className='mt-2 text-[10px] text-gray-400'>
                  {cardDia.credit}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
      <footer className='px-3 py-6 md:px-10 flex flex-col items-center'>
        {/* creditos + links */}
        <h2 className='text-xl font-medium text-violet-500 uppercase tracking-[0.25em]'>
          Beyond the stars
        </h2>
        <p className='mt-3 max-w-md text-sm leading-6 text-zinc-400'>
          Discover the beauty and mystery of the universe through NASA's imagery.
        </p>
        <p className="mt-4 text-xs text-zinc-500">
          Data provided by NASA · APOD
        </p>

        <p className="mt-2 text-xs text-zinc-600">
          © 2026 Beyond the Stars
        </p>

      </footer>
    </div>
  )
}

// NASA · ASTRONOMY PICTURE OF THE DAY

export default App;

