import "./ShowProduct.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { __shipmentapiurl } from "../../../reqUrl";

function ShowProducts() {
  const params = useParams();

  const [productList, setProductList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [tick, setTick] = useState(0);

  useEffect(() => {
    axios
      .get(__shipmentapiurl + "fetch", {
        params: { subcatnm: params.subcatnm },
      })
      .then((response) => {
        const allProducts = response.data;

        const activeProducts = allProducts.filter(
          (prod) => prod.bid_status == 1
        );
        const deactiveProducts = allProducts.filter(
          (prod) => prod.bid_status == 0
        );

        const sortedList = [...activeProducts, ...deactiveProducts];
        setProductList(sortedList);
      })
      .catch((error) => console.log(error));
  }, [params.subcatnm]);

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
    const interval = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h1 class="mb-4">
                Show Products <span class="text-primary ">&gt;&gt;</span>{" "}
                {params.subcatnm}
              </h1>
              <div className="table-responsive">
                <table className=" table  table-striped table-dark ">
                  <thead style={{ textAlign: "center" }}>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Base Amount</th>
                      <th scope="col">Bidding Price</th>
                      <th scope="col">Bidding Time</th>
                      <th scope="col">Bidding </th>
                      <th scope="col">Doc File</th>
                      <th scope="col">Bid Status</th>
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
                          <td>{row.baseprice}</td>
                          <td>{row.auctionprice}</td>
                          <td className="timer-flash">
                            {getRemainingTime(row.info)}
                          </td>
                          <td>
                            {row.bid_status == 1 ? (
                              <Link to={`/bidproduct/${row._id}`}>
                                <button className="btn btn-outline-success">
                                  Participate
                                </button>
                              </Link>
                            ) : (
                              <button
                                className="btn btn-outline-danger"
                                disabled
                              >
                                Closed
                              </button>
                            )}
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
                              style={{ width: "80px", height: "25px" }}
                              className={`badge ${
                                row.bid_status === 1
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            >
                              {row.bid_status === 1 ? "Active" : "Deactive"}
                            </span>
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

export default ShowProducts;
