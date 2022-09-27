
const Navbar = () => {

  return (
    <>
    <nav className="flex justify-around items-center p-3 h-[10vh] bg-sky-400 text-white">
      <header>
        <h1><a href="#">OpenWeatherAPP</a></h1>
      </header>
      <ul className="container flex justify-around items-center">
        <li><a href="#">get data by location</a></li>
        <li><a href="#">get data by search</a></li>
        <li><a href="#">next day forecast</a></li>
      </ul>
    </nav>
    </>
  )
}

export {Navbar}