import "./ManageProduct.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { __shipmentapiurl } from "../../../reqUrl";
import { Link } from 'react-router-dom'

function ManageProducts() {
  const [productList, setProductList] = useState([]);
  const [tick, setTick] = useState(0);

  const fetchProduct = () => {
    axios
      .get(__shipmentapiurl + "fetch")
      .then((response) => setProductList(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const getRemainingTime = (info) => {
    const createTime = new Date(info).getTime();
    const expiryTime = createTime + 48 * 60 * 60 * 1000;
    const now = Date.now();
    const remaining = expiryTime - now;

    if (remaining <= 0) return "Expired";

    const hours = Math.floor(
      (remaining % (1000 * 60 * 60 * 48)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    return `${hours}h  ${minutes}m ${seconds}s`;
  };

  //update every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
      checkBidTime();
    }, 1000);
    return () => clearInterval(interval); //cleanup function
  }, [productList]);

  const checkBidTime = () => {
    const now = Date.now();
    productList.forEach((row) => {
      if (row.bid_status == 1) {
        const createTime = new Date(row.info).getTime();
        const expiryTime = createTime + 48 * 60 * 60 * 1000;

        if (row.bid_status == 1 && now >= expiryTime) {
          const updateDetails = {
            condition_obj: { _id: row._id },
            content_obj: { bid_status: 0 },
          };
          axios
            .patch(__shipmentapiurl + "update", updateDetails)
            .then(() => fetchProduct())
            .catch((error) => console.log(error));
        }
      }
    });
  };

  const handleEditButton = ()=>{
    
  }

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <div className="table-responsive">
                <table className=" table  table-striped table-dark ">
                  <thead style={{ textAlign: "center" }}>
                    <tr>
                      <th scope="col">S. No.</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th scope="col">Base Amount</th>
                      <th scope="col">Bidding Price</th>
                      <th scope="col">Bidding Time</th>
                      <th scope="col">Doc File</th>
                      <th scope="col">Bid Status</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.length === 0 ? (
                      <tr>
                        <td className="text-center">No products found</td>
                      </tr>
                    ) : (
                      productList.map((row) => (
                        <tr>
                          <td>{row._id}</td>
                          <td>
                            <img
                              src={`/uploads/shipmenticons/${row.piconnm}`}
                              alt={row.title}
                              style={{
                                maxWidth: "100px",
                                maxHeight: "80px",
                                objectFit: "cover",
                                borderRadius: "6px",
                              }}
                            />
                          </td>
                          <td>{row.title}</td>
                          <td>{row.catnm}</td>
                          <td>{row.subcatnm}</td>
                          <td>{row.baseprice}</td>
                          <td>{row.auctionprice}</td>
                          <td className="timer-flash">
                            {getRemainingTime(row.info)}
                          </td>

                          <td>
                            {row.description ? (
                              <a
                                href={`/uploads/shipmentdescriptions/${row.description}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline-light"
                              >
                                View Doc
                              </a>
                            ) : (
                              "N/A"
                            )}
                          </td>
                          <td>
                            <span
                              style={{ width: "80px", height: "25pxs" }}
                              className={`badge ${
                                row.bid_status === 1
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            >
                              {row.bid_status === 1 ? "Active" : "Deactive"}
                            </span>
                          </td>
                          <td>
                            <span onClick={handleEditButton} className="fa fa-edit"></span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageProducts;
