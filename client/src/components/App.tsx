import Header from "./Header";
import Home from "../pages/Home";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="w-full max-w-screen mx-auto bg-grisClaro">
        <Header />
        <main className="max-w-6xl mx-auto">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
