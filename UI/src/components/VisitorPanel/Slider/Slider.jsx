import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function Slider() {
  const [SliderContant, setSliderContant] = useState();

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("token") != undefined) {
        setSliderContant(<></>);
      } else {
        setSliderContant(
          <>
            <section className="slider_section">
              <div className="slider_bg_box">
                <img src="/images/user-panel-bg.jpg" alt="" />
              </div>
              <div
                id="customCarousel1"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="detail-box">
                            <h1>
                              We Provide best <br />
                              Shipping Service
                            </h1>
                            <p>
                              Welcome to <b>"Shipping Wars"</b>, the platform
                              that revolutionizes the shipping experience! We
                              connect drivers with available shipments through a
                              competitive bidding process, making shipment
                              handling more efficient. Our secure and
                              user-friendly interface allows easy navigation,
                              detailed shipment views, and seamless bidding. At
                              <b> "Shipping Wars"</b>, we are dedicated to
                              delivering a functional and intuitive application
                              that sets a new standard in the shipping industry.
                              Join us and be part of the revolution!
                            </p>
                            <div className="btn-box">
                              <a className="btn1">
                                <Link to="/contact"> Get In Touch </Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="detail-box">
                            <h1>
                              We Provide best <br />
                              Shipping Service
                            </h1>
                            <p>
                              Welcome to <b>"Shipping Wars"</b>, the platform
                              that revolutionizes the shipping experience! We
                              connect drivers with available shipments through a
                              competitive bidding process, making shipment
                              handling more efficient. Our secure and
                              user-friendly interface allows easy navigation,
                              detailed shipment views, and seamless bidding. At
                              <b> "Shipping Wars"</b>, we are dedicated to
                              delivering a functional and intuitive application
                              that sets a new standard in the shipping industry.
                              Join us and be part of the revolution!
                            </p>
                            <div className="btn-box">
                              <a className="btn1">
                                <Link to="/contact"> Get In Touch </Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="detail-box">
                            <h1>
                              We Provide best <br />
                              Shipping Service
                            </h1>
                            <p>
                              Welcome to <b>"Shipping Wars"</b>, the platform
                              that revolutionizes the shipping experience! We
                              connect drivers with available shipments through a
                              competitive bidding process, making shipment
                              handling more efficient. Our secure and
                              user-friendly interface allows easy navigation,
                              detailed shipment views, and seamless bidding. At
                              <b> "Shipping Wars"</b>, we are dedicated to
                              delivering a functional and intuitive application
                              that sets a new standard in the shipping industry.
                              Join us and be part of the revolution!
                            </p>
                            <div className="btn-box">
                              <a className="btn1">
                                <Link to="/contact"> Get In Touch </Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators">
                  <li
                    data-target="#customCarousel1"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#customCarousel1" data-slide-to="1"></li>
                  <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
              </div>
            </section>
          </>
        );
      }
    }, 1);
  }, []);

  return (
    <>
      {/* slider section */}
      {SliderContant}
      {/* end slider section */}
    </>
  );
}

export default Slider;
