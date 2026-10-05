const Card = ({ card }) => {
  return (
    <article className="flex flex-col items-center rounded-lg border border-gray-200 text-center  p-4 shadow-[0_0_14px_rgba(167,125,246,0.25)] bg-gray-100 transition duration-300 hover:translate-y-1 opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">

      <h2 className="text-lg font-medium text-gray-900">
        {card.title}
      </h2>

      <div className="m-4 w-full overflow-hidden rounded-md shadow-[0_0_20px_rgba(167,125,246,0.45)]">
        <img
          src={card.hdurl}
          alt={card.alt}
          className="h-56 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <p className="text-xs uppercase tracking-widest text-gray-500">
        {card.date}
      </p>

    </article>
  );
};

export default Card;