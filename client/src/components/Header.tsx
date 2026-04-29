import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="w-full bg-orange-300">
      <div className="w-full flex flex-wrap flex-col p-4 max-w-3xl mx-auto">
        <div className="w-full flex items-center gap-2">
          <a className="h-13 w-13 flex-none" href="/">
            <img
              className="max-w-full h-auto object-contain"
              src={logo}
              alt="logo"
            />
          </a>
          <div className="grow flex flex-col gap-4">
            <div className="w-full ">
              <search className="flex">
                <input type="text" placeholder="Search..." />
                <button className="absolute">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </search>
              <nav className="md:hidden"> ||| </nav>
              <div>Cart</div>
            </div>
            {/* Navegacion >tablet */}
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
        {/* Navegacion desplegable mobile */}
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
