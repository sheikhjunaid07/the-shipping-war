import { useState } from "react";
import "./Service.css";

const paragraphStyles = {
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

function Service() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCargo, setIsOpenCargo] = useState(false);
  const [isOpenTruck, setIsOpenTruck] = useState(false);
  const [isOpenTrain, setIsOpenTrain] = useState(false);
  return (
    <>
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <div className="heading_container">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of shipping are available here. We
                shipping based on requirement.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Air Transport</h5>
                    <p style={isOpen ? null : paragraphStyles}>
                      Our air transport shipping services offer fast and
                      reliable movement of consignments across the globe. By
                      leveraging advanced air freight solutions, we ensure your
                      cargo reaches its destination quickly, supporting seamless
                      trade and timely deliveries. Committed to efficiency and
                      sustainability, we continuously optimize our processes to
                      deliver exceptional service while minimizing environmental
                      impact.
                    </p>
                    <a onClick={() => setIsOpen(!isOpen)}>
                      {" "}
                      {isOpen ? "Read Less" : "Read More"}{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Cargo Transport</h5>
                    <p style={isOpenCargo ? null : paragraphStyles}>
                      Our cargo transport services provide efficient and
                      dependable solutions for moving goods across various
                      distances. Utilizing advanced logistics and transportation
                      methods, we ensure your shipments arrive safely and on
                      time, supporting your business growth through reliable
                      deliveries. We prioritize operational excellence and
                      environmental responsibility to offer exceptional service
                      while reducing our ecological footprint.
                    </p>
                    <a onClick={() => setIsOpenCargo(!isOpenCargo)}>
                      {" "}
                      {isOpenCargo ? "Read Less" : "Read More"}{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Trucks Transport</h5>
                    <p style={isOpenTruck ? null : paragraphStyles}>
                      Our truck transport services deliver reliable and
                      efficient solutions for moving goods across road networks
                      of all distances. By leveraging modern fleet management
                      and optimized routing, we ensure your shipments reach
                      their destinations safely and punctually, supporting your
                      business with dependable deliveries. We emphasize
                      operational excellence and sustainability to provide
                      top-tier service while minimizing environmental impact.
                    </p>
                    <a onClick={() => setIsOpenTruck(!isOpenTruck)}>
                      {" "}
                      {isOpenTruck ? "Read Less" : "Read More"}{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s4.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Train Transport</h5>
                    <p style={isOpenTrain ? null : paragraphStyles}>
                      Our train transport services provide efficient and
                      reliable solutions for moving goods across extensive rail
                      networks. Utilizing advanced rail logistics and
                      scheduling, we guarantee timely and secure delivery of
                      your shipments, supporting your business with consistent
                      and environmentally friendly freight transport. We focus
                      on operational excellence and sustainability to deliver
                      premium service while reducing ecological impact.
                    </p>
                    <a onClick={() => setIsOpenTrain(!isOpenTrain)}>
                      {" "}
                      {isOpenTrain ? "Read Less" : "Read More"}{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end service section */}
    </>
  );
}

export default Service;
