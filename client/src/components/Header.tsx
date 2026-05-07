import logo from "../assets/logo.png";
import { useState, useRef, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useDropdown } from "../hooks/useDropdown";
import { replaceClass } from "../utils/handleDOM";

type NavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMovile: boolean;
};

const Nav = ({ isMenuOpen, setIsMenuOpen, isMovile }: NavProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState("light"); // Estado para controlar el tema actual (light/dark)

  // captura input checkbox para cambiar su estado al hacer click en el toggle
  const themeRef = useRef<HTMLInputElement>(null);
  // captura el div del toggle para cambiar su estilo segun el tema
  const toggleThemeRef = useRef<HTMLDivElement>(null);

  // Maneja el cambio de tema al hacer click en el toggle
  const handleTheme = () => {
    if (themeRef.current) {
      themeRef.current.checked = !themeRef.current.checked;
      setTheme(themeRef.current.checked ? "dark" : "light");
    }
  };
  // Efecto para cambiar el estilo del toggle segun el tema
  useEffect(() => {
    if (toggleThemeRef.current) {
      let sunMoon = toggleThemeRef.current.children[0] as HTMLDivElement;
      if (theme === "dark") {
        replaceClass(toggleThemeRef.current, "bg-blue-300", "bg-blue-950");
        replaceClass(sunMoon, "translate-x-0", "translate-x-full");
        replaceClass(sunMoon, "bg-amarillo", "bg-blanco");
      } else {
        replaceClass(toggleThemeRef.current, "bg-blue-950", "bg-blue-300");
        replaceClass(sunMoon, "translate-x-full", "translate-x-0");
        replaceClass(sunMoon, "bg-blanco", "bg-amarillo");
      }
    }
  }, [theme]);

  // Si la vista es para movile, activa el Hook para abrir/cerrar el menú móvil
  isMovile && useDropdown({
    isOpen: isMenuOpen,
    setIsOpen: setIsMenuOpen,
    element: menuRef.current,
  });

  return (
    <div
      ref={menuRef}
      className={
        "w-full items-center text-xl overflow-hidden transition-all duration-700 " +
        (isMovile
          ? "flex md:hidden flex-col gap-2 h-0"
          : "hidden md:flex justify-between gap-5")
      }
    >
      <div
        className={
          "font-staatliches text-center " +
          (isMovile ? "" : "bg-grisClaro px-3 py-1 rounded-lg order-last")
        }
      >
        <i className="fa-solid fa-paw"></i> Ingresar
      </div>
      <nav
        className={
          "text-center " + (isMovile ? "w-full border-t border-b" : "grow")
        }
      >
        <ul
          className={
            "flex items-center gap-2 font-staatliches " +
            (isMovile ? "w-full flex-col" : "justify-between")
          }
        >
          <li className={isMovile ? "w-full" : "grow border-r-2"}>
            <Link to="/">HOME</Link>
          </li>
          <li className={isMovile ? "w-full" : "grow border-r-2"}>
            <Link to="/tienda">TIENDA</Link>
          </li>
          <li className={isMovile ? "w-full" : "grow border-r-2"}>
            <Link to="/#nosotros">NOSOTROS</Link>
          </li>
          <li className={isMovile ? "w-full" : "grow"}>FAQS</li>
        </ul>
      </nav>
      <div
        ref={toggleThemeRef}
        className="w-10 h-5 bg-blue-300 rounded-full cursor-pointer transition-color duration-700"
        onClick={handleTheme}
      >
        <div className="w-5 h-5 rounded-full bg-amarillo transition-transform duration-700 translate-x-0"></div>
        <input ref={themeRef} type="checkbox" className="hidden" />
      </div>
    </div>
  );
};

const Header = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-naranjaClaro">
      <div className="w-full flex flex-wrap flex-col p-2 max-w-6xl mx-auto">
        <div className="w-full flex items-center gap-3">
          <Link className="h-13 w-13 md:h-21 md:w-21 flex-none" to="/">
            <img
              className="max-w-full h-auto object-contain"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="grow flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <search className="flex grow bg-white rounded-xl">
                <input
                  className="px-3 py-1 w-full"
                  type="text"
                  placeholder="Busca..."
                />
                <button className="border-l px-2 my-1 text-grisOscuro">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </search>
              <nav
                className="md:hidden flex-none flex items-center text-grisOscuro px-1"
                onClick={handleIsOpenMenu}
              >
                <i className="fa-solid fa-bars text-2xl"></i>
              </nav>
              <div className="flex-none flex items-center text-verde">
                <i className="fa-solid fa-cart-shopping text-xl md:text-2xl"></i>
              </div>
            </div>
            {/* Navegacion >= a tablet */}
            <Nav
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isMovile={false}
            />
          </div>
        </div>
        {/* Navegacion desplegable mobile */}
        <Nav
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isMovile={true}
        />
      </div>
    </header>
  );
};

export default Header;
