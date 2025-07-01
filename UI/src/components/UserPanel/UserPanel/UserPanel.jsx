import "./UserPanel.css";

function UserPanel() {
  return (
    <>
      <section className="slider_section">
        <div className="slider_bg_box">
          <img src="/images/user-bg.jpg" alt="" />
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
                  <div className="col-md-4">
                    <div className="detail-box">
                      <div className="btn-box"></div>
                      <h1>
                        Your Gateway To
                        <br />
                        Any Destination in the World.
                      </h1>
                      <p>
                        Welcome to <b>"Shipping Wars"</b>, the platform that
                        revolutionizes the shipping experience! We connect
                        drivers with available shipments through a competitive
                        bidding process, making shipment handling more
                        efficient. Our secure and user-friendly interface allows
                        easy navigation, detailed shipment views, and seamless
                        bidding.
                      </p>
                      <div className="btn-box"></div>
                      <div className="btn-box"></div>
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
