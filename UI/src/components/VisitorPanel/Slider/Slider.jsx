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
                      <div>
                        <div>
                          <div className="detail-box">
                            <h1>
                              We Provide best <br />
                              <span style={{ color: "#17a2b8" }}>
                                Shipping Service
                              </span>
                            </h1>
                            <h4 style={{ color: "white" }}>
                              Welcome to <b>"Shipping Wars"</b>, the platform
                              that revolutionizes the shipping experience! We
                              connect drivers with available shipments through a
                              competitive bidding process, making shipment
                              handling more efficient.
                            </h4>
                            <div
                              className="btn-box"
                              style={{ textDecoration: "none" }}
                            >
                              <Link to="/contact" className="btn1">
                                {" "}
                                Get In Touch{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div>
                          <div className="detail-box">
                            <h1>
                              We Are Proud <br />
                              <span style={{ color: "#17a2b8" }}>
                                To Be Always On Demand
                              </span>
                            </h1>
                            <h4 style={{ color: "white" }}>
                              <b> "Shipping Wars"</b>, we are dedicated to
                              delivering a functional and intuitive application
                              that sets a new standard in the shipping industry.
                              Join us and be part of the revolution!
                            </h4>
                            <div
                              className="btn-box"
                              style={{ textDecoration: "none" }}
                            >
                              <Link to="/contact" className="btn1">
                                {" "}
                                Get In Touch{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        {/* <div className="col-md-7"> */}
                        <div>
                          <div className="detail-box">
                            <h1>
                              We Are Active <br />
                              <span style={{ color: "#17a2b8" }}>
                                To Ship Your Product Trusted
                              </span>
                            </h1>
                            <h4 style={{ color: "white" }}>
                              We connect you with a network of verified
                              transporters to simplify your freight process with
                              speed, transparency, and full visibility.
                            </h4>
                            <div
                              className="btn-box"
                              style={{ textDecoration: "none" }}
                            >
                              <Link to="/contact" className="btn1">
                                {" "}
                                Get In Touch{" "}
                              </Link>
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
