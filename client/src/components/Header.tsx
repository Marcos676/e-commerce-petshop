import logo from "../assets/logo.png";
import { useState, useRef, useEffect } from "react";
import { replaceClass } from "../utils/handleDOM";
const Header = () => {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const themeRef = useRef<HTMLInputElement>(null);
  const toggleThemeRef = useRef<HTMLDivElement>(null);

  const handleTheme = () => {
    if (themeRef.current) {
      themeRef.current.checked = !themeRef.current.checked;
      setTheme(themeRef.current.checked ? "dark" : "light");
    }
  };
  useEffect(() => {
    if (toggleThemeRef.current) {
      let sunMoon = toggleThemeRef.current.children[0] as HTMLDivElement;
      if (theme === "dark") {
        replaceClass(toggleThemeRef.current, "bg-grisClaro", "bg-grisOscuro");
        replaceClass(toggleThemeRef.current, "justify-start", "justify-end");
        replaceClass(sunMoon, "bg-amarillo", "bg-blanco");
      } else {
        replaceClass(toggleThemeRef.current, "bg-grisOscuro", "bg-grisClaro");
        ("bg-grisClaro");
        replaceClass(toggleThemeRef.current, "justify-end", "justify-start");
        replaceClass(sunMoon, "bg-blanco", "bg-amarillo");
      }
    }
  }, [theme]);

  return (
    <header className="w-full bg-naranjaClaro">
      <div className="w-full flex flex-wrap flex-col p-2 max-w-3xl mx-auto">
        <div className="w-full flex items-center gap-2">
          <a className="h-13 w-13 flex-none" href="/">
            <img
              className="max-w-full h-auto object-contain"
              src={logo}
              alt="logo"
            />
          </a>
          <div className="grow flex flex-col gap-4">
            <div className="w-full flex">
              <search className="flex grow bg-white rounded-xl">
                <input
                  className="px-3 py-1 w-full"
                  type="text"
                  placeholder="Search..."
                />
                <button className="border-l px-2 my-1 text-grisOscuro">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </search>
              <nav className="md:hidden flex-none flex items-center ml-4 text-grisOscuro">
                <i className="fa-solid fa-bars text-xl"></i>
              </nav>
              <div className="flex-none flex items-center ml-4 text-verde">
                <i className="fa-solid fa-cart-shopping text-lg"></i>
              </div>
            </div>
            {/* Navegacion > a tablet */}
            <div className="w-full hidden md:flex ">
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
        <div className="w-full flex flex-col items-center gap-2 text-lg md:hidden">
          <div className=" font-staatliches border-b text-center px-20">
            <i className="fa-solid fa-paw"></i> Ingresar
          </div>
          <nav className=" border-b text-center px-22">
            <ul className="flex flex-col items-center gap-2 font-staatliches">
              <li>HOME</li>
              <li>TIENDA</li>
              <li>NOSOTROS</li>
              <li>FAQS</li>
            </ul>
          </nav>
          <div
            ref={toggleThemeRef}
            className="w-10 h-5 flex justify-start items-center bg-grisClaro rounded-full cursor-pointer"
            onClick={handleTheme}
          >
            <div className="w-5 h-5 rounded-full bg-amarillo"></div>
            <input ref={themeRef} type="checkbox" className="hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
