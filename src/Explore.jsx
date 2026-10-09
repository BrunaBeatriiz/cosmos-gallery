import NavBar from "./comp/NavBar";
import heroImage from './img/p3.jpg'
import { Search } from "lucide-react";
import { useState } from "react";
import { reqDataEscolhida } from "./service/apiService";

const Explore = () => {

  const [data, setData] = useState();
  const [card, setCard] = useState();



  const reqData = async (data) => {


    const dataCorrigida = data.replace(/-/g, "").slice(2);


    let res = await reqDataEscolhida(dataCorrigida);

    setCard(res);

    console.log(card)
  };


  return (
    <div className="bg-[#08090d] text-white">

      <NavBar />

      <header className="relative min-h-screen overflow-hidden bg-[#08090d] px-8 py-32 text-white md:px-16">
        <img src={heroImage} alt="foto do ceu estrelado"
          className='absolute inset-0 h-full w-full object-cover'
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} />




        <div className='relative z-10'>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-violet-400">
            Beyond the stars
          </p>
          <h1 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            Search among the stars.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-300 md:text-xl">
            Explore NASA's imagery and discover stories, places and moments hidden across the universe.
          </p>

          <p className="mt-20 text-sm text-zinc-400 md:text-base">
            Search through the cosmos and discover somethong new.
          </p>
        </div>
        {/* intro / hero */}
      </header>


      <main className='px-8 py-24 md:px-16'>
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
            Explore the stars
          </p>
          <h2 className="mt-3 text-4xl font-medium tracking-tight md:text-5xl">
            Explore a moment in the universe.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 md:text-base">
            Choose a date and discover the Astronomy Picture of the Day.
          </p>
        </div>
        <section className="mt-6 flex gap-1">
          <div className="flex gap-1 w-full items-center justify-center mt-3
          ">
            <input type="date" name="" id=""
              onChange={(event) => setData(event.target.value)}
              value={data}
              className="bg-zinc-400 rounded-md w-[100%] p-1  tracking-[0.15em]" />

            <button className=" bg-violet-700 px-3 rounded-lg h-[35px] flex items-center justify-center transition hover:bg-violet-600"
              onClick={() => { reqData(data) }}>
              <Search size={18} className="hover:text-violet-900" />

            </button>
          </div>
        </section>
        <section className='px-8 py-24 md:px-16 '>

          <div className='mb-10'>
            <p className='text-sm uppercase tracking-[0.25em] text-violet-400'>
              Your discovery
            </p>

            <h2 className='mt-3 text-4xl font-medium tracking-tight md:text-5xl'>
              A moment you found in the cosmos.
            </h2>
          </div>

          {card && (
            <div className='bg-gray-50 w-full flex flex-col items-center mx-auto max-w-6xl gap-3 rounded-lg border border-violet-200/40 p-2 shadow-[0_0_25px_rgba(192,168,255,0.5)] md:flex-row items-center transition duration-300 hover:translate-x-1'>

              <div className='w-full md:w-[66%] flex flex-col items-center'>

                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  {card.title}
                </h2>

                <div className="overflow-hidden rounded-lg">
                  <img
                    src={card.hdurl}
                    alt={card.alt}
                    className="h-96 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <div className='w-full md:w-[40%] p-1'>
                <p className='text-xs uppercase tracking-[0.25em] text-violet-500'>
                  About this image
                </p>


                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {card.explanation.slice(0, 250)}...
                </p>

                <p className="text-xs uppercase tracking-widest text-gray-500 mt-3">
                  Date: {card.date}
                </p>
                <p className='mt-2 text-[10px] text-gray-400'>
                  {card.credit}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className='px-3 py-6 md:px-10'>
        {/* creditos + links */}
        <div className="flex flex-col md:items-center md:mx-auto md:max-w-7xl">
          <h2 className='text-lg font-medium text-violet-500 uppercase tracking-[0.25em]'>
            Beyond the stars
          </h2>
          <p className="mt-2 text-xs text-zinc-500">
            Data provided by NASA · APOD
          </p>
          <p className="mt-2 text-xs text-zinc-600">
            © 2026 Beyond the Stars
          </p>
        </div>

      </footer>
    </div>
  )
}

export default Explore;