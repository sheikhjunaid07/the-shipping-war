import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { __bidapiurl, __shipmentapiurl } from "../../../reqUrl";
import Swal from "sweetalert2";

function BidProduct() {
  const params = useParams();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState([]);
  const [currentPrice, setCurrentPrice] = useState([]);
  const [bidPrice, setBidPrice] = useState([]);
  const [owner, setOwner] = useState(false);
  const [output, setOutput] = useState();

  const email = localStorage.getItem("email");

  useEffect(() => {
    axios
      .get(__shipmentapiurl + "fetch", {
        params: { _id: params._id },
      })
      .then((response) => {
        console.log(response.data[0]);
        setProductDetails(response.data[0]);
        setOwner(response.data[0].useremail === email);
      });
  }, []);

  useEffect(() => {
    if (!productDetails.baseprice) return;

    axios
      .get(__bidapiurl + "fetch", { params: { product_id: params._id } })
      .then((response1) => {
        const bids = response1.data;

        if (!Array.isArray(bids) || bids.length === 0) {
          setCurrentPrice(productDetails.baseprice);
        } else {
          const minBid = bids.reduce(
            (min, bid) => (bid.bidprice < min ? bid.bidprice : min),
            bids[0].bidprice
          );

          setCurrentPrice(minBid);
        }
      })
      .catch(() => {
        setCurrentPrice(productDetails.baseprice);
      });
  }, [productDetails, params._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(bidPrice) === currentPrice) {
      Swal.fire({
        text: "You are not Lowest First Bid!!",
        icon: "warning",
      }).then(() => {
        navigate("/bidproduct/" + params._id);
      });
      return;
    }

    if (parseInt(bidPrice) > currentPrice) {
      Swal.fire({
        text: `Enter Low value from ${currentPrice}`,
        icon: "warning",
      }).then(() => {
        navigate("/bidproduct/" + params._id);
      });
      return;
    }

    var bidDetails = {
      product_id: params._id,
      user_id: localStorage.getItem("email"),
      bidprice: parseInt(bidPrice),
    };
    axios
      .post(__bidapiurl + "save", bidDetails)
      .then(() => {
        setOutput("Bid updated successfully....");
        setBidPrice("");
        navigate("/bidproduct/" + params._id);
      })
      .catch(() => {
        setOutput("Unable to bid , please try again....");
        setBidPrice("");
      });
  };
  return (
    <>
      <div className="container py-5 bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            {/* Output Message */}
            {output && (
              <div
                className="alert alert-info text-center fw-bold py-3 rounded shadow-sm"
                role="alert"
                style={{ fontSize: "1.1rem" }}
              >
                {output}
              </div>
            )}

            {/* Bidding Card */}
            <div className="card shadow-lg rounded-4 border-0 hover-card">
              <div className="card-header text-center bg-white border-bottom py-3">
                <h3 className="mb-0 fw-bold" style={{ color: "#0A97B0" }}>
                  Bidding Panel
                </h3>
                <small className="text-muted">Product ID: {params._id}</small>
              </div>

              <div className="card-body px-4 py-4">
                <div className="mb-4">
                  <p className="fs-5">
                    <strong>Base Price:</strong> {productDetails.baseprice}
                  </p>
                  <p className="text-center fw-bold text-secondary fs-5">
                    Current Bid price:{" "}
                    <span className="text-danger">{currentPrice}</span>
                  </p>
                </div>

                {owner ? (
                  <div
                    className="alert alert-warning text-center fs-6"
                    role="alert"
                  >
                    You cannot bid on your own product.
                  </div>
                ) : (
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="bidAmount"
                        className="form-label fw-semibold"
                      >
                        Your Bid Amount
                      </label>
                      <input
                        type="number"
                        id="bidAmount"
                        className="form-control rounded-pill border border-secondary"
                        placeholder="Enter Bid Amount here"
                        value={bidPrice}
                        onChange={(e) => setBidPrice(e.target.value)}
                        style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,.1)" }}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary w-100 fw-bold rounded-pill shadow-sm btn-hover"
                      style={{ fontSize: "1.1rem" }}
                    >
                      Place Bid
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h1 class="mb-4">
                Bid Product <span style={{ color: "#" }}>Here!!</span>
              </h1>

              <div className="table-responsive">
                <table>
                  <tr>
                    <td>ProductID : </td>
                    <td>{params._id}</td>
                  </tr>
                  <tr>
                    <td>Base Price : </td>
                    <td>&#8377;{productDetails.baseprice}</td>
                  </tr>
                  <tr>
                    <td>Auction Current Price : </td>
                    <td>&#8377;{currentPrice}</td>
                  </tr>
                  {owner ? (
                    <div
                      className="alert alert-warning text-center fs-6"
                      role="alert"
                    >
                      You cannot bid on your own product.
                    </div>
                  ) : (
                    <tr>
                      <td>Enter Your Bid Price : </td>
                      <td>
                        <form>
                          <input
                            type="text"
                            class="form-control"
                            value={bidPrice}
                            onChange={(e) => setBidPrice(e.target.value)}
                          />
                          <br />
                          <button
                            onClick={handleSubmit}
                            type="button"
                            class="btn btn-danger"
                          >
                            Bid Product
                          </button>
                        </form>
                      </td>
                    </tr>
                  )}
                  {output}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default BidProduct;
