import PetList from "../components/PetList";
import ProductCard from "../components/ProductCard";
//Swiper es una libreria de carrusel apra React
import { Swiper, SwiperSlide } from "swiper/react"; //importa componentes principales de Swiper
import { Autoplay } from "swiper/modules"; //importa modulo de autoplay para que el carrusel se mueva solo
import "swiper/css";
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
        <h2 className="mb-2 text-2xl text-center font-bold text-grisOscuro">
          Selecciona tu tipo de mascota
        </h2>
        <PetList isFilterView={false} width={"w-25 md:w-30"} />
      </section>
      <section className="p-4 my-4 bg-blanco rounded-lg">
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
      <section id="nosotros" className="p-4 my-4 bg-blanco rounded-lg">
        <h2 className="mb-2 text-center text-2xl font-bold text-grisOscuro">
          Sobre nosotros
        </h2>
        <p className="text-grisOscuro text-center text-xl font-medium">
          En nuestra empresa FootGoose® ofrecemos una amplia gama de productos y
          alimentos para su mascota, como así también un servicio médico
          ambulatorio para emergencias veterinarias. Somos la empresa líder en
          distribución y abastecimiento de insumos animales. Nuestros clientes
          promueven a las mascotas como un miembro más de la familia, y a cambio
          nosotros les proveemos un servicio de primer nivel. El proyecto
          FootGoose® surge cuando en 1984 Alejandro Patiño (padre del dueño de
          la marca), le realiza maniobras de RCP a un ganso en una playa de la
          costa este de los Estados Unidos. Al salvarle la vida al animal, un
          extraño hombre le agradeció, era el mismísimo Kenny Loggins, dueño del
          ganso llamado Rupert.
          <span className="block my-2 italic font-bold">
            -"Jamás imaginé que conocería a Kenny Loggins, ni mucho menos
            descubrir que tenía un ganso mascota"- dijo Alejandro.
          </span>
          A partir de ese momento, Loggins formó una gran amistad con Patiño, y
          juntos fundaron FootGoose®, el primer centro veterinario con temática
          ochentosa.
        </p>
      </section>

      <div className="flex flex-col md:flex-row justify-around flex-wrap bg-blanco rounded-lg p-4 my-4 gap-5">
        {[
          { icono: "fa-credit-card", texto: "Pagá con tarjeta o efectivo" },
          { icono: "fa-box", texto: "Envío gratis desde $50.000" },
          { icono: "fa-user-shield", texto: "Seguridad, de principio a fin" },
        ].map((beneficio, index) => (
          <div
            key={index}
            className="flex flex-col justify-around items-center py-2 gap-2"
          >
            <i
              className={`fas ${beneficio.icono} block text-2xl text-negro`}
            ></i>
            <p className="text-xl font-bold text-negro text-center">
              {beneficio.texto}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
