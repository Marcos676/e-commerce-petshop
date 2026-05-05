const Footer = () => {
  return (
    <>
      <footer className="w-full bg-naranjaClaro flex flex-col md:flex-row justify-around gap-5 p-4">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-xl font-bold text-center">Contacto</h3>
          <div>
            <p className="text-lg">Teléfono: 123-456-7890</p>
            <p className="text-lg">Email: info@footgoose.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-xl font-bold text-center">
            Preguntas frecuentes
          </h3>
          <div>
            <p className="text-lg">¿Cómo comprar?</p>
            <p className="text-lg">¿Tiempos de envío?</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h3 className="text-xl font-bold text-center">Nuestras redes</h3>
          <div className="flex gap-10 justify-center text-2xl">
            <i className="fab fa-x"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
      </footer>
      <div>
        <p className="font-bold text-grisOscuro pl-2">&copy; 2026 FootGoose. Todos los derechos reservados.</p>
      </div>
    </>
  );
};

export default Footer;
