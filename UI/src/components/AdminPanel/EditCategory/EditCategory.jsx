import "./EditCategory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { __categoryapiurl } from "../../../reqUrl";
import Swal from "sweetalert2";

function EditCategory() {
  const [editData, setEditData] = useState();
  const [catList, setCatList] = useState([]);
  const [formData, setFormData] = useState({
    catnm: "",
  });

  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => setCatList(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (row) => {
    setEditData(row._id);
    setFormData({
      catnm: row.catnm,
    });
  };

  const handleSave = (_id) => {
    const update_details = {
      condition_obj: { _id: _id },
      content_obj: {
        catnm: formData.catnm,
      },
    };

    axios
      .patch(__categoryapiurl + "update", update_details)
      .then(() => {
        Swal.fire("Updated", "Category Detail Updated", "success");
        setEditData(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="text-dark text-uppercase fw-bold mb-3">
          Edit Category{" "}
          <span style={{ color: "rgb(10, 151, 176)" }}>Here!!</span>
        </h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th className="table-heading">Categories </th>
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
    // <>
    //   <section className="contact_section">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-lg-4 col-md-5 offset-md-1">
    //           <div className="heading_container">
    //             <h2>
    //               Add Category <span>Here!!</span>
    //             </h2>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-lg-4 col-md-5 offset-md-1">
    //           <div className="form_container contact-form">
    //             <form>
    //               <div class="form-group">
    //                 {editData === row._id ? (
    //                   <select
    //                     value={formData.catnm}
    //                     onChange={(e) =>
    //                       setFormData({
    //                         ...formData,
    //                         catnm: e.target.value,
    //                       })
    //                     }
    //                     className="form-control"
    //                   >
    //                     <option value="">Select Category</option>
    //                     {catList.map((cat) => (
    //                       <option key={cat.catnm} value={cat.catnm}>
    //                         {cat.catnm}
    //                       </option>
    //                     ))}
    //                   </select>
    //                 ) : (
    //                   row.catnm
    //                 )}
    //               </div>
    //               {/* <div class="form-group">
    //                 <input type="file" onChange={handleChange} />
    //               </div> */}
    //               <div className="btn_box">
    //                 {editData === row._id ? (
    //                   <>
    //                     <button
    //                       className="btn btn-sm btn-success me-1"
    //                       onClick={() => handleSave(row._id)}
    //                     >
    //                       Save
    //                     </button>
    //                     <button
    //                       className="btn btn-sm btn-secondary me-1"
    //                       onClick={() => setEditData(null)}
    //                     >
    //                       Cancel
    //                     </button>
    //                   </>
    //                 ) : (
    //                   <button
    //                     className="btn btn-sm btn-outline-warning"
    //                     onClick={() => handleEdit(row)}
    //                     disabled={row.bid_status === 0}
    //                   >
    //                     <i className="fa fa-edit"></i>
    //                   </button>
    //                 )}
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}

export default EditCategory;
