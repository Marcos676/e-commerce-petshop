import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="w-full bg-orange-300">
      <div className="w-full flex flex-wrap flex-col p-4 max-w-3xl mx-auto">
        <div className="w-full flex items-center gap-2">
          <a className="h-13 w-13" href="/">
            <img className="h-13" src={logo} alt="logo" />
          </a>
          <div className="grow flex flex-col gap-4">
            <div className="w-full flex justify-between">
              <search className="flex">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
              </search>
              <nav className="md:hidden"> ||| </nav>
              <div>Cart</div>
            </div>
            <div className="w-full hidden md:flex">
              <nav>
                <ul className="flex">
                  <li>HOME</li>
                  <li>TIENDA</li>
                  <li>NOSOTROS</li>
                  <li>FAQS</li>
                </ul>
              </nav>
              <div>Tema</div>
              <div>Ingresar</div>
            </div>
          </div>
        </div>
        {/* Desplegable mobile */}
        <div className="w-full flex flex-col md:hidden">
          <nav>
            <ul className="flex">
              <li>HOME</li>
              <li>TIENDA</li>
              <li>NOSOTROS</li>
              <li>FAQS</li>
            </ul>
          </nav>
          <div>Tema</div>
          <div>Ingresar</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
