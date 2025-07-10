import Service from "../Service/Service";
import About from "../About/About";
import TrackShipping from "../TrackShipping/TrackShipping";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";

function Home() {
  return (
    <>
      <div className="hero_area">
        <Slider />
      </div>
      <br />
      <br />
      <About />
      <Service />
      <TrackShipping />
      {/* <Testimonial /> */}
      <br />
      <br />
      <Contact />
      <Info />
      <Footer />
    </>
  );
}

export default Home;
