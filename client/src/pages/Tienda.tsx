import { useState, useRef } from "react";
import PetList from "../components/PetList";
import ProductCard from "../components/ProductCard";
import { useDropdown } from "../hooks/useDropdown";

/* Contiene 2 divs: 
        - 1º breadCrum filtrado y ordenar por
        - 2º Vista de los productos + paginador
        Orden en movile: 2 vivs apilados.
        1º Breadcrum, filtro desplegable, ordenar por. Todo en una columna. Bread en una fila y filtro + ordenar por en otra.
        2º Vista de producto
        Orden en Tablet(md):
        1º Bread + cantidad resultados + ordenar por en la 1º fila. En 2º fila  Filtro
        2º al lado de filtro, productos, en la misma fila */
const Tienda = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Parte de la logica de Paginación
  /*const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12; // o calcúlalo dinámicamente según tus productos */

  // Maneja el valor de la apertura y cierre del desplegable
  const handleIsFilterOpen = () => setIsFilterOpen(!isFilterOpen);

  //Hook que se encarga de la apertura y cierre del contenido a desplegar
  useDropdown({
    isOpen: isFilterOpen,
    setIsOpen: setIsFilterOpen,
    element: filterRef.current,
  });
  return (
    <div className="p-2 gap-2">
      <div className="flex flex-wrap justify-between gap-2 mb-2">
        <div className="w-full md:w-auto text-grisOscuro font-bold text-sm md:text-lg">
          Tienda / Perro / Alimento / Medicado
        </div>
        <div className="hidden md:block text-grisOscuro bg-grisClaro text-lg font-bold">
          Resultados: 12
        </div>
        <button
          className="md:hidden px-3 text-lg text-grisOscuro bg-grisClaro border rounded-sm font-bold cursor-pointer"
          onClick={handleIsFilterOpen}
        >
          Filtros
        </button>
        <select
          className="text-grisOscuro border rounded-sm text-lg  px-2"
          name="ordenar"
          defaultValue={""}
        >
          <option value="" hidden>
            Ordenar por:
          </option>
          <option value="valor2">Opción 1</option>
          <option value="valor3">Opción 2</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        {/* Seccion de filtros */}
        <div
          ref={filterRef}
          className="h-0 md:h-auto w-full md:max-w-58 overflow-hidden transition-all duration-700 flex flex-col items-center gap-4 border-t border-b md:border-b-0 border-grisOscuro"
        >
          <div className="md:w-full pt-2">
            <select
              className="md:hidden text-grisOscuro border rounded-sm text-lg px-5 py-1"
              name="animal"
              defaultValue={""}
            >
              <option value="" hidden>
                Animal
              </option>
              <option value="valor2">Perro</option>
              <option value="valor3">Gato</option>
            </select>

            <h3 className="hidden md:block text-grisOscuro font-bold text-lg">
              Compra para:
            </h3>
            <PetList isFilterView={true} width="w-15" />
          </div>
          <div>
            <h3 className="hidden md:block text-grisOscuro font-bold text-lg">
              Categoría:
            </h3>
            <select
              className="md:hidden text-grisOscuro border rounded-sm text-lg px-5 py-1"
              name="categoria"
              defaultValue={""}
            >
              <option value="" hidden>
                Categoría
              </option>
              <option value="valor2">Alimento</option>
              <option value="valor3">Juguetes</option>
            </select>
          </div>
          <div>
            <h3 className="hidden md:block text-grisOscuro font-bold text-lg">
              Subcategoria:
            </h3>
            <select
              className="md:hidden text-grisOscuro border rounded-sm text-lg px-5 py-1"
              name="subcategoria"
              defaultValue={""}
            >
              <option value="" hidden>
                Subcategoria
              </option>
              <option value="valor2">Balanceado</option>
              <option value="valor3">Medicado</option>
            </select>
          </div>
          <div className="border-t border-grisOscuro w-full pt-2">
            <label
              htmlFor="precio"
              className="text-lg text-grisOscuro font-bold"
            >
              Precio
            </label>
            <div className="flex items-center gap-2">
              <span className="text-lg text-grisOscuro">$1000</span>
              <input
                className="w-full text-grisOscuro border rounded-sm text-lg"
                type="range"
                name="precio"
                min="1000"
                max="100000"
                defaultValue="5000"
              />
              <span className="text-lg text-grisOscuro">$100000</span>
            </div>
          </div>
          <div className="pb-2">
            <button className="bg-verde text-blanco rounded-sm px-5 py-1 font-bold text-lg">
              Fitrar
            </button>
          </div>
        </div>
        {/* ------- */}
        <div className="flex grow flex-col gap-4">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] grid-rows-[repeat(auto-fit, 1fr)] justify-between items-center gap-4">
            <ProductCard name="Nombre del producto de marca 1 kajsdkhasd asda sdasd" />
            <ProductCard name="Nombre del producto 2" />
            <ProductCard name="Nombre del producto 3" />
            <ProductCard name="Nombre del producto 4" />
            <ProductCard name="Nombre del producto 5" />
            <ProductCard name="Nombre del producto de marca 1 kajsdkhasd asda sdasd" />
            <ProductCard name="Nombre del producto 2" />
            <ProductCard name="Nombre del producto 3" />
            <ProductCard name="Nombre del producto 4" />
            <ProductCard name="Nombre del producto 5" />
          </div>
          {/* Paginador */}
          <div className="flex items-center justify-center gap-2 text-grisOscuro font-bold">
            <button
              className="px-3 py-1 border rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-grisClaro"
              /* disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} */
            >
              Anterior
            </button>

            {/* LOGICA PROPUESTA EXAMINAR Y ADAPTAR AL MOMENTO DE APLICAR
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Centrar el rango visual alrededor de la página actual
                let startPage = Math.max(1, currentPage - 2);
                if (totalPages > 5 && currentPage > totalPages - 3) {
                  startPage = totalPages - 4;
                }
                const page = startPage + i;
                if (page > totalPages) return null;

                return (
                  <button
                    key={page}
                    className={`px-3 py-1 border rounded-sm ${
                      currentPage === page
                        ? "bg-verde text-blanco border-verde"
                        : "hover:bg-grisClaro"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                );
              })} */}

            {/* PROVISORIO PARA LA VISTA */}
            {[1, 2, 3, 4].map((page) => {
              return (
                <button
                  key={page}
                  className={`px-3 py-1 border rounded-sm hidden min-[375px]:block hover:bg-grisOscuro hover:text-blanco`}
                  /* onClick={() => setCurrentPage(page)} */
                >
                  {page}
                </button>
              );
            })}

            {/* ------------------------- */}

            <button
              className="px-3 py-1 border rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-grisClaro"
              /* disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1)) 
                }*/
            >
              Siguiente
            </button>
          </div>
          <div className="text-center text-sm text-grisOscuro mt-2">
            {/*  Página {currentPage} de {totalPages} */} 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
