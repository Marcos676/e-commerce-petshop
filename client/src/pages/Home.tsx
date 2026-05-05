//Swiper es una libreria de carrusel apra React
import { Swiper, SwiperSlide } from "swiper/react"; //importa componentes principales de Swiper
import { Autoplay } from "swiper/modules"; //importa modulo de autoplay para que el carrusel se mueva solo
import "swiper/css"; // Importa estilos
import "swiper/css/autoplay";

type ProductCardProps = {
  name: String
}
const ProductCard = ({ name }: ProductCardProps) => {
  return (
    <a className="h-full bg-blanco rounded-lg shadow-md p-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
      >
        {["1.jpg", "2.jpg", "3.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`images/productos/${img}`}
              className="w-full h-40 object-contain mb-4 rounded"
              alt="Imagen de producto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="line-clamp-2 text-lg font-semibold text-grisOscuro mb-2">
        {name}
      </h3>
      <p className="flex items-center gap-2">
        <span className="text-lg font-bold text-verde"> $19.99 </span>
        <span className="text-sm font-bold text-rojo"> 25%off </span>
      </p>
    </a>
  );
};

const Home = () => {
  return (
    <>
      {/* carrusel */}
      <Swiper
        modules={[Autoplay]} // Registra el modulo
        autoplay={{ delay: 5000 }} // Cambia cada 5 segundos
        loop={true} //Se repite infinitamente
        slidesPerView={1} //Muestra un slide a la vez
      >
        {["carrusel1.jpg", "carrusel2.jpg", "carrusel3.jpg"].map(
          (img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`images/carrusel/${img}`}
                className="object-contain"
                alt="Imagen de banner"
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <section className="px-2 my-4">
        <h2 className="mb-2 text-2xl text-grisOscuro">
          Busca por tipo de mascota
        </h2>
        <ul
          className="grid justify-around items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, 100px)" }}
        >
          {["Perro", "Gato", "Pez", "Roedor", "Ave", "Reptil"].map(
            (tipo, index) => (
              <li key={index} className="mx-auto">
                <img
                  className="max-w-full h-auto object-contain"
                  src={`images/categorias/icono${tipo}.png`}
                  alt={tipo}
                />
              </li>
            ),
          )}
        </ul>
      </section>
      <section className="p-4 m-4 bg-blanco rounded-lg">
        <h2 className="mb-2 border-b border-grisClaro text-2xl font-bold text-grisOscuro">
          Productos más vendidos
        </h2>
        <div className="grid grid-rows-[repeat(auto-fit, 1fr)] grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-between items-center gap-4">
          <ProductCard name="Nombre del producto de marca 1 kajsdkhasd asda sdasd" />
          <ProductCard name="Nombre del producto 2" />
          <ProductCard name="Nombre del producto 3" />
          <ProductCard name="Nombre del producto 4" />
          <ProductCard name="Nombre del producto 5" />
        </div>
      </section>
    </>
  );
};

export default Home;
