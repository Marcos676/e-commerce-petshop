import { Swiper, SwiperSlide } from "swiper/react"; //importa componentes principales de Swiper
import { Autoplay } from "swiper/modules"; //importa modulo de autoplay para que el carrusel se mueva solo
import "swiper/css"; // Importa estilos
import "swiper/css/autoplay";

type ProductCardProps = {
  name: String;
};
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

export default ProductCard;
