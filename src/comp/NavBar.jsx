const NavBar = () => {
  return(
    <nav className="absolute top-0 left-0 z-10 flex w-full items-center justify-between px-8 py-6 md:px-16">
        {/* logo + navegação */}
        <a href="/"
        className="text-sm font-medium tracking-[0.15em]">STARS</a>

        <div className="flex gap-8 text-sm">
          <a href="/">home</a>
          <a href="/">explore</a>
        </div>
      </nav>
  )
}

export default NavBar;