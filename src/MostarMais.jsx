import { useEffect, useState } from "react";
import NavBar from "./comp/NavBar";
import { reqHighMais } from "./service/apiService";
import Card from "./comp/Card";


const MostrarMais = () => {


  const [cards, setCard] = useState([]);

  useEffect(() => {
    ; const busca = async () => {
      const r = await reqHighMais()

      setCard(r)
    }

    busca();
  }, [])

  return (
    <div className="bg-[#08090d] text-white">

      <NavBar />



      <main className='px-8 py-32 md:px-16'>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
            Beyond the Stars
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-5xl">
            Cosmos Gallery.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base">
            Explore extraordinary images that reveal the beauty and mysteries of the universe.
          </p>
        </div>


        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
            cards.map((card) => {
              return <Card key={card.date} card={card} />
            })
          }
        </section>

      </main>

      <footer className='px-3 py-6 md:px-10 '>
        {/* creditos + links */}
        <div className=" flex flex-col md:items-center md:mx-auto md:max-w-7xl">
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

export default MostrarMais;