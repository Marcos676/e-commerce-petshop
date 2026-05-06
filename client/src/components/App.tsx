import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Tienda from "../pages/Tienda";
import Footer from "./Footer";

// Componente para hacer scroll suave a secciones específicas al cambiar el hash en la URL ya que react-router no lo hace por defecto
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
};

const App = () => {
  return (
    <>
      <div className="w-full max-w-screen mx-auto bg-grisClaro">
        <Header />
        <main className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
          </Routes>
          <ScrollToHash />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
