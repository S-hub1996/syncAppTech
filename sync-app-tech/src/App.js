import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sites from "./components/Sites";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div >
  <Navbar/>
  <Banner/>
  <Sites/>
  <Testimonials/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
