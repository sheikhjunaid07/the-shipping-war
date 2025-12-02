import "./EditSubCategory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { __categoryapiurl, __subcategoryapiurl } from "../../../reqUrl";
import Swal from "sweetalert2";

function EditSubCategory() {
  const [editData, setEditData] = useState();
  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);
  const [formData, setFormData] = useState({
    catnm: "",
    subcatnm: "",
  });

  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => setCatList(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (formData.catnm) {
      axios
        .get(__subcategoryapiurl + "fetch", {
          params: { catnm: formData.catnm },
        })
        .then((response) => setSubCatList(response.data))
        .catch((error) => console.log(error));
    } else setSubCatList([]);
  }, [formData.catnm]);

  const handleEdit = (row) => {
    setEditData(row._id);
    setFormData({
      catnm: row.catnm,
      subcatnm: row.subcatnm,
    });
  };

  const handleSave = (_id) => {
    const update_details = {
      condition_obj: { _id: _id },
      content_obj: {
        catnm: formData.catnm,
        subcatnm: formData.subcatnm,
      },
    };

    axios
      .patch(__subcategoryapiurl + "update", update_details)
      .then(() => {
        Swal.fire("Updated", "SubCategory Detail Updated", "success");
        setEditData(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="text-dark text-uppercase fw-bold mb-3">
          Edit Sub Category{" "}
          <span style={{ color: "rgb(10, 151, 176)" }}>Here!!</span>
        </h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th className="table-heading">Categories </th>
                <th className="table-heading">Sub Category</th>
                <th className="table-heading">Edit</th>
              </tr>
            </thead>
            <tbody>
              {catList.map((row) => (
                <tr key={row._id}>
                  <td className="category-name">
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
                        {catList.map((cat) => (
                          <option key={cat.catnm} value={cat.catnm}>
                            {cat.catnm}
                          </option>
                        ))}
                      </select>
                    ) : (
                      row.catnm
                    )}
                  </td>
                  <td className="subcategory-name">
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
                        {subCatList.map((subcat) => (
                          <option key={subcat.subcatnm} value={subcat.subcatnm}>
                            {subcat.subcatnm}
                          </option>
                        ))}
                      </select>
                    ) : (
                      row.subcatnm
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
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => handleEdit(row)}
                        disabled={row.bid_status === 0}
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default EditSubCategory;
