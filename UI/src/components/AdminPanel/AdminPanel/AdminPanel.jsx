import "./AdminPanel.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { __shipmentapiurl, __userapiurl } from "../../../reqUrl";
import Card from "../AdminUtilities/Card";

function AdminPanel() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeBids: 0,
    closedBids: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const productResponse = await axios.get(__shipmentapiurl + "fetch");
        const products = productResponse.data;
        const active = products.filter((p) => p.bid_status === 1).length;
        const closed = products.length - active;
        const users = await axios.get(__userapiurl + "fetch");
        setStats({
          totalProducts: products.length,
          activeBids: active,
          closedBids: closed,
          totalUsers: users.data.length,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);
  return (
    <>
      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div>
              <div className="detail-box">
                <div
                  className="heading_container"
                  style={{ alignItems: "center" }}
                >
                  <h2>
                    Welcome back Chief,
                    <span style={{ color: "#17a2b8" }}>
                      {" "}
                      &nbsp;{localStorage.getItem("name")}
                    </span>
                  </h2>
                </div>
                <div className="main-card">
                  <Card title={"Total Products"} data={stats.totalProducts} />
                  <Card title={"Active Products"} data={stats.activeBids} />
                  <Card title={"Closed Products"} data={stats.closedBids} />
                  <Card title={"Active Users"} data={stats.totalUsers} />
                </div>
                <br />
                <div
                  className="heading_container"
                  style={{ alignItems: "center" }}
                >
                  <h3>
                    Quick
                    <span style={{ color: "#17a2b8" }}> Options</span>
                  </h3>
                </div>
                <div className="manage-options">
                  {/* Add Link Tag All the Options */}
                  <Card title={"Mange Users"} icon={"👥"} />
                  <Card title={"Mange Products"} icon={"📦"} />
                  <Card title={"Add Category"} icon={"➕"} />
                  <Card title={"Add SubCategory"} icon={"➕"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminPanel;
