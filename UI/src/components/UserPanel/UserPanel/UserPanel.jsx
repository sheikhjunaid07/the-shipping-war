import "./UserPanel.css";

function UserPanel() {
  return (
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
                        Welcome back,{" "}
                        <span>{localStorage.getItem("name")}</span>
                      </h1>
                      <h3 style={{ fontWeight: "600" }}>
                        Your Partner for{" "}
                        <span style={{ color: "#17a2b8" }}>Fast Shipping</span>
                      </h3>
                      <br />
                      <h5>
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
                          <Link to="/contact"> Get In Touch </Link>
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
