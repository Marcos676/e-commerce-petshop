//Swiper es una libreria de carrusel apra React
import { Swiper, SwiperSlide } from "swiper/react"; //importa componentes principales de Swiper
import { Autoplay } from "swiper/modules"; //importa modulo de autoplay para que el carrusel se mueva solo
import "swiper/css"; // Importa estilos
import "swiper/css/autoplay";

//type Props = {}

const Home = (/* props: Props */) => {
  return (
    <>
      {/* carrusel */}
      <Swiper
        modules={[Autoplay]} // Registra el modulo
        autoplay={{ delay: 5000 }} // Cambia cada 5 segundos
        loop={true} //Se repite infinitamente
        slidesPerView={1} //Muestra un slide a la vez
      >
        <SwiperSlide>
          <img
            src="images/carrusel/carrusel1.jpg"
            className="object-contain"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/carrusel/carrusel2.jpg"
            className="object-contain"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/carrusel/carrusel3.jpg" className="" alt="" />
        </SwiperSlide>
      </Swiper>
      <section>
        <h3>Busca por tipo de mascota</h3>
        <ul>
          <li>
            <img src="images/categorias/iconoPerro.png" alt="Perro" />
          </li>
          <li>
            <img src="images/categorias/iconoGato.png" alt="Gato" />
          </li>
          <li>
            <img src="images/categorias/iconoPez.png" alt="Pez" />
          </li>
          <li>
            <img src="images/categorias/iconoRoedor.png" alt="Roedor" />
          </li>
          <li>
            <img src="images/categorias/iconoAve.png" alt="Ave" />
          </li>
          <li>
            <img src="images/categorias/iconoReptil.png" alt="Reptil" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
