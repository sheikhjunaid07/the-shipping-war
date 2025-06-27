import { useState } from "react";
import "./About.css";

const paragraphStyles = {
  WebkitLineClamp: "7",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* about section */}

      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About</h2>
                </div>
                <p style={isOpen ? null : paragraphStyles}>
                  Welcome to <b>"Shipping Wars"</b> a dynamic platform designed
                  to revolutionize the shipping industry by connecting drivers
                  with available shipments through a competitive bidding
                  process.We meticulously designed Schemas for Shipments, Bids,
                  and Drivers. User authentication and authorization mechanisms
                  are implemented to secure data handling for both drivers and
                  admin users. Users can easily navigate through available
                  shipments, view details, and place bids. The driver dashboard
                  provides insights into current shipments, past bids, and
                  earnings, enhancing user engagement. Together, these roles
                  contribute to a well-structured, functional, and user-friendly
                  application, making <b>"Shipping Wars"</b> a leader in the
                  shipping industry.
                </p>
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end about section */}
    </>
  );
}

export default About;
