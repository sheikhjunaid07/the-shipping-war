import "./MyProduct.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  __categoryapiurl,
  __shipmentapiurl,
  __subcategoryapiurl,
} from "../../../reqUrl";

function MyProduct() {
  const [pList, setProList] = useState([]);
  const [cList, setCatList] = useState([]);
  const [scList, setSubCatList] = useState([]);
  const [editData, setEditData] = useState();
  const [formData, setFormData] = useState({
    title: "",
    catnm: "",
    subcatnm: "",
    baseprice: "",
    auctionprice: "",
  });

  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => {
        setCatList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (formData.catnm) {
      axios
        .get(__subcategoryapiurl + "fetch", {
          params: { catnm: formData.catnm },
        })
        .then((response) => {
          setSubCatList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else setSubCatList([]); //Clear sub category if category is clear/change
  }, [formData.catnm]);

  //fetch product
  const email = localStorage.getItem("email");

  useEffect(() => {
    axios
      .get(__shipmentapiurl + "fetch", {
        params: { useremail: email },
      })
      .then((response) => {
        // console.log(response.data);

        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //edit

  const handleEdit = (row) => {
    setEditData(row._id);
    setFormData({
      title: row.title,
      catnm: row.catnm,
      subcatnm: row.subcatnm,
      baseprice: row.baseprice,
      auctionprice: row.auctionprice,
    });
  };

  const handleSave = (_id) => {
    const update_details = {
      condition_obj: { _id: _id },
      content_obj: {
        title: formData.title,
        catnm: formData.catnm,
        subcatnm: formData.subcatnm,
        baseprice: formData.baseprice,
        auctionprice: formData.auctionprice,
      },
    };

    axios
      .patch(__shipmentapiurl + "update", update_details)
      .then(() => {
        Swal.fire("Updated", "Product Detail Updated", "success");
        setEditData(null); //  Exit edit mode
      })
      .catch((error) => {
        console.log(error);
      });

    // Refresh product list
    axios
      .get(__shipmentapiurl + "fetch", {
        params: { useremail: email },
      })
      .then((response) => {
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text with fade-left animation */}
            <div className="col-lg-12">
              <h2 className="text-dark text-uppercase fw-bold mb-3">
                My Product List{" "}
                <span style={{ color: "#0A97B0" }}> &gt;&gt;</span>
              </h2>
              <div className="table-responsive">
                <table className="table table-striped table-dark align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th scope="col">Base Amount</th>
                      <th scope="col">Bidding status</th>
                      <th scope="col">Document File</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pList.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="text-center">
                          No products found
                        </td>
                      </tr>
                    ) : (
                      pList.map((row) => (
                        <tr key={row._id}>
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
                          <td>
                            {editData === row._id ? (
                              <input
                                type="text"
                                value={formData.title}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    title: e.target.value,
                                  })
                                }
                                className="form-control"
                              />
                            ) : (
                              row.title
                            )}
                          </td>
                          <td>
                            {editData === row._id ? (
                              <select
                                value={formData.catnm}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    catnm: e.target.value,
                                  })
                                }
                                className="form-control"
                              >
                                <option value="">Select Category</option>
                                {cList.map((cat) => (
                                  <option key={cat.catnm} value={cat.catnm}>
                                    {cat.catnm}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              row.catnm
                            )}
                          </td>
                          <td>
                            {editData === row._id ? (
                              <select
                                value={formData.subcatnm}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    subcatnm: e.target.value,
                                  })
                                }
                                className="form-control"
                              >
                                <option value="">Select Sub Category</option>
                                {scList.map((subCat) => (
                                  <option
                                    key={subCat.subcatnm}
                                    value={subCat.subcatnm}
                                  >
                                    {subCat.subcatnm}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              row.subcatnm
                            )}
                          </td>
                          <td>
                            {editData === row._id ? (
                              <input
                                type="text"
                                value={formData.baseprice}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    baseprice: e.target.value,
                                  })
                                }
                                className="form-control"
                              />
                            ) : (
                              row.baseprice
                            )}
                          </td>
                          <td>
                            {row.bid_status == 1 ? (
                              <Link to={`/bidproduct/${row._id}`}>
                                <button className="btn btn-outline-success mt-3">
                                  Participate
                                </button>
                              </Link>
                            ) : (
                              <button
                                className="btn btn-outline-danger mt-3"
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
                                className="btn btn-sm btn-outline-light mt-3"
                              >
                                View Doc
                              </a>
                            ) : (
                              "N/A"
                            )}
                          </td>
                          <td>
                            {editData === row._id ? (
                              <>
                                <button
                                  className="btn btn-sm btn-success me-1"
                                  onClick={() => handleSave(row._id)}
                                >
                                  Save
                                </button>
                                <button
                                  className="btn btn-sm btn-secondary me-1"
                                  onClick={() => setEditData(null)}
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <button
                                className="btn btn-m btn-btn-outline-warning mt-4"
                                onClick={() => handleEdit(row)}
                                disabled={row.bid_status === 0}
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                            )}
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

export default MyProduct;
