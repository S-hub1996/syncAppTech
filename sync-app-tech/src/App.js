import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Sites from "./components/Sites";
import Support from "./components/Support";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function App() {
  return (
    <>
  <Navbar/>
  <Banner/>
  <Sites/>
  <About/>
  <Plan/>
  <Testimonials/>
  <Support/>
  <Contact/>
  <Footer/>
    </>
  );
}

export default App;
