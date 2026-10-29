import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisiMisi from "./components/VisiMisi";
import Organization from "./components/Organization";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisiMisi />
        <Organization />
      </main>
      <Footer />
    </>
  );
}

export default App;