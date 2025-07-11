import "./UserPanel.css";

function UserPanel() {
  return (
    <>
      <section className="about_section layout_padding-bottom">
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
                  Your Partner for{" "}
                  <span style={{ color: "#17a2b8" }}>Fast Shipping</span>
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
                <button>Start Booking</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserPanel;
