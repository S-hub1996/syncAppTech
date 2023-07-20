import { Box } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MarqueeSlider from "./components/Marquee";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Sites from "./components/Sites";
import Support from "./components/Support";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
  <Navbar/>
  <Banner/>
  <MarqueeSlider/>
  <Sites/>
  <Plan/>
  <Testimonials/>
  <Support/>
  <Contact/>
  <Footer/>
    </>
  );
}

export default App;
