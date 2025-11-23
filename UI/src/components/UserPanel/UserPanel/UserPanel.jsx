import "./UserPanel.css";
import { Link } from "react-router-dom";

function UserPanel() {
  return (
    <>
      {/* <section className="slider_section">
        <div className="slider_bg_box">
          <img src="/images/user-panel-bg.jpg" alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-item active">
            <div className="container">
              <div className="detail-box">
                <div
                  className="heading_container"
                  style={{ alignItems: "center" }}
                >
                  <br />
                  <br />
                  <h3 style={{ color: "white" }}>
                    Welcome back,{" "}
                    <span style={{ color: "#17a2b8" }}>
                      {localStorage.getItem("name")}
                    </span>
                  </h3>
                </div>
                <h1
                  style={{
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Your Gateway to{" "}
                  <span style={{ color: "#17a2b8" }}>
                    Any Destination in the World.
                  </span>
                </h1>
                <br />
                <h5 style={{ color: "white" }}>
                  We connect you with a network of verified transporters to
                  simplify your freight process with speed, transparency, and
                  full visibility.
                </h5>
                <p style={{alignItems: "center",}}>
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
      <div className="userhome-hero d-flex  align-items-center">
        <div className="container text-center">
          <div
            className="glass-card mx-auto p-5 border border-2 rounded-3 shadow-lg "
            data-aos="zoom-in-up"
          >
            <h2
              className="fw-bold text-uppercase  mb-3"
              style={{ color: "black" }}
            >
              Welcome,
              <span style={{ color: "#0A97B0" }}>
                {" "}
                {localStorage.getItem("name")}!
              </span>
            </h2>
            <h1 className="display-5 fw-bold mb-4">
              Transform Your Shipping with <br />
              <span style={{ color: "#0A97B0" }}>Bidding & Auctions</span>
            </h1>
            <p className="lead mb-3" style={{ color: "black" }}>
              Our platform connects shippers and transporters in a real-time
              bidding environment to ensure competitive pricing, efficient
              delivery, and transparency throughout the process.
            </p>
            <p className="fst-italic mb-4" style={{ color: "black" }}>
              Save time. Cut costs. Gain control over your logistics like never
              before.
            </p>

            <div
              className="d-flex justify-content-center gap-3 mt-4"
              data-aos="fade-up"
            >
              <Link to="/addproduct">
                <button
                  className="btn btn-lg btn-white shadow-lg px-4 py-2 fw-semibold shadow bg-secondary"
                  style={{ color: "white" }}
                >
                  🚚 Add Product for Bidding
                </button>
              </Link>
              <Link to="/allproducts">
                <button
                  className="btn btn-lg btn-outline-light shadow-lg px-4 py-2 fw-semibold bg-secondary"
                  style={{ color: "white" }}
                >
                  📦 View Available Shipments
                </button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="features mt-5 pt-5 " data-aos="fade-up">
            <h3 className=" fw-bold mb-4" style={{ color: "#0A97B0" }}>
              Why Choose Our Platform?
            </h3>
            <div className="row text-start text-light ">
              <div className="col-md-4 mb-4">
                <div className="feature-box p-4 h-100 border border-2 rounded-3 shadow-lg">
                  <h5 style={{ color: "#0A97B0" }}>📈 Transparent Bidding</h5>
                  <p className="mb-0" style={{ color: "black" }}>
                    Get the best deals by inviting multiple transporters to bid
                    on your shipment. Highest bid wins.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="feature-box p-4 h-100 border border-2 rounded-3 shadow-lg">
                  <h5 style={{ color: "#0A97B0" }}>⏱️ Real-Time Auctions</h5>
                  <p className="mb-0" style={{ color: "black" }}>
                    Set time-bound auctions for urgent shipments. Let
                    transporters compete and optimize cost.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="feature-box p-4 h-100 border border-2 rounded-3 shadow-lg">
                  <h5 style={{ color: "#0A97B0" }}>
                    📊 Smart Shipment Dashboard
                  </h5>
                  <p className="mb-0" style={{ color: "black" }}>
                    Track your products, bidding history, and allocations
                    through your personal dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-5 pt-5" data-aos="zoom-in">
            <p className="small" style={{ color: "black" }}>
              Ready to streamline your shipping operations? Join our growing
              network of smart shippers and verified transporters.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPanel;
