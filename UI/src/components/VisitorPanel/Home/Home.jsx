import { lazy, Suspense } from "react";

const About = lazy(() => import("../About/About.jsx"));
const Slider = lazy(() => import("../Slider/Slider.jsx"));
const Service = lazy(() => import("../Service/Service.jsx"));
const TrackShipping = lazy(() => import("../TrackShipping/TrackShipping.jsx"));
const Info = lazy(() => import("../Info/Info.jsx"));
const Contact = lazy(() => import("../Contact/Contact.jsx"));
const Footer = lazy(() => import("../Footer/Footer.jsx"));

// import Testimonial from "../Testimonial/Testimonial";
function Home() {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
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
      </Suspense>
    </>
  );
}

export default Home;
