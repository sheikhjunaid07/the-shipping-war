import { About, Contact, Footer, Info, Service, Slider, TrackShipping } from "../../../importFilePaths";

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
