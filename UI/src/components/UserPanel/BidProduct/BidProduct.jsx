import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { __bidapiurl, __shipmentapiurl } from "../../../reqUrl";

function BidProduct() {
  const params = useParams();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState([]);
  const [currentPrice, setCurrentPrice] = useState([]);
  const [bidPrice, setBidPrice] = useState([]);
  const [output, setOutput] = useState();

  useEffect(() => {
    axios
      .get(__shipmentapiurl + "fetch", {
        params: { _id: params._id },
      })
      .then((response) => {
        console.log(response.data[0]);
        setProductDetails(response.data[0]);
      });
  });

  useEffect(() => {
    if (!productDetails.baseprice) return;

    axios
      .get(__bidapiurl + "fetch", { params: { product_id: params._id } })
      .then((response1) => {
        console.log("Fetched bids:", response1.data); // 👈 log this

        const bids = response1.data;

        if (!Array.isArray(bids) || bids.length === 0) {
          console.log(
            "No bids found, using base price:",
            productDetails.baseprice
          );
          setCurrentPrice(productDetails.baseprice);
        } else {
          const minBid = bids.reduce(
            (min, bid) => (bid.bidprice < min ? bid.bidprice : min),
            bids[0].bidprice
          );

          console.log("Min bid found:", minBid);
          setCurrentPrice(minBid);
        }
      })
      .catch((error) => {
        console.error("Error fetching bids:", error);
        setCurrentPrice(productDetails.baseprice);
      });
  }, [productDetails, params._id]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h1 class="mb-4">
                Bid Product <span class="text-primary ">Here!!</span>
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
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BidProduct;
