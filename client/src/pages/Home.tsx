//Swiper es una libreria de carrusel apra React
import { Swiper, SwiperSlide } from "swiper/react"; //importa componentes principales de Swiper
import { Autoplay } from "swiper/modules"; //importa modulo de autoplay para que el carrusel se mueva solo
import "swiper/css"; // Importa estilos
import "swiper/css/autoplay";



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
      
    </>
  );
};

export default Home;
