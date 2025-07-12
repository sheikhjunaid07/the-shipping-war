import "./UserPanel.css";
import { Link } from "react-router-dom";

function UserPanel() {
  return (
    <>
      {/* <section className="about_section layout_padding-bottom">
        <div>
          <img src="/images/user-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Welcome back, <span>{localStorage.getItem("name")}</span>
                  </h2>
                </div>
                <br />
                <h3 style={{ fontWeight: "600" }}>
                  Your Gateway to{" "}
                  <span style={{ color: "#17a2b8" }}>
                    Any Destination in the World.
                  </span>
                </h3>
                <br />
                <h5>
                  We connect you with a network of verified transporters to
                  simplify your freight process with speed, transparency, and
                  full visibility.
                </h5>
                <p>
                  Say goodbye to hidden costs and delays — start managing your
                  shipments smarter today.
                </p>
                <div className="btn-box">
                  <a className="btn1">
                    <Link to="/addproduct"> Get In Touch </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
                      <div className="heading_container">
                        <br />
                        <br />
                        <h2 style={{ color: "white" }}>
                          Welcome back,{" "}
                          <span>{localStorage.getItem("name")}</span>
                        </h2>
                      </div>
                      <h3 style={{ fontWeight: "600", color: "white" }}>
                        Your Gateway to{" "}
                        <span style={{ color: "#17a2b8" }}>
                          Any Destination in the World.
                        </span>
                      </h3>
                      <br />
                      <h5 style={{ color: "white" }}>
                        We connect you with a network of verified transporters
                        to simplify your freight process with speed,
                        transparency, and full visibility.
                      </h5>
                      <p>
                        Say goodbye to hidden costs and delays — start managing
                        your shipments smarter today.
                      </p>
                      <div className="btn-box">
                        <a className="btn1">
                          <Link to="/addproduct"> Get In Touch </Link>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserPanel;
