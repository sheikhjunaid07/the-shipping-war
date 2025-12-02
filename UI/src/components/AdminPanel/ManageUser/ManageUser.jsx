import { useEffect, useState } from "react";
import { __userapiurl } from "../../../reqUrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ManageUser() {
  const navigate = useNavigate();

  const [users, setUserDetails] = useState([]);
  useEffect(() => {
    axios
      .get(__userapiurl + "fetch", {
        params: { role: "user" },
      })
      .then((response) => {
        //console.log(response.data);
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const manageuserstatus = (_id, s) => {
    if (s == "active") {
      var update_details = {
        condition_obj: { _id: _id },
        content_obj: { status: 1 },
      };
      axios.patch(__userapiurl + "update", update_details).then(() => {
        alert("User activated successfully....");
        navigate("/manageuser");
      });
    } else if (s == "inactive") {
      // eslint-disable-next-line no-redeclare
      var update_details = {
        condition_obj: { _id: _id },
        content_obj: { status: 0 },
      };
      axios.patch(__userapiurl + "update", update_details).then(() => {
        alert("User deactivated successfully....");
        navigate("/manageuser");
      });
    } else {
      var delete_details = { data: { _id: _id } };
      axios.delete(__userapiurl + "delete", delete_details).then(() => {
        alert("User deleted successfully....");
        navigate("/manageuser");
      });
    }
  };

  return (
    <>
      {/* About Start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h1 class="mb-4">
                View & Manage Users{" "}
                <span class="text-primary text-uppercase">Here!!</span>
              </h1>
              <table
                class="table table-bordered"
                cellSpacing={10}
                cellPadding={10}
              >
                <tr>
                  <th>RegId</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Gender</th>
                  <th>Info</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {users.map((row) => (
                  <tr>
                    <td>{row._id} </td>
                    <td>{row.name} </td>
                    <td>{row.email} </td>
                    <td>{row.mobile} </td>
                    <td>{row.address} </td>
                    <td>{row.city} </td>
                    <td>{row.gender} </td>
                    <td>{row.info} </td>
                    <td>
                      {row.status == 1 ? (
                        <font className="bg-success rounded-lg text-white">
                          Active
                        </font>
                      ) : (
                        <font className="bg-danger rounded-lg text-white">
                          InActive
                        </font>
                      )}
                    </td>
                    <td>
                      {row.status == 1 ? (
                        <a
                          className="bg-primary rounded-lg text-white"
                          onClick={() => {
                            manageuserstatus(row._id, "inactive");
                          }}
                        >
                          ChangeStatus
                        </a>
                      ) : (
                        <a
                          className="bg-primary rounded-lg text-white"
                          onClick={() => {
                            manageuserstatus(row._id, "active");
                          }}
                        >
                          ChangeStatus
                        </a>
                      )}
                      <br />
                      <br />
                      <a
                        className="bg-danger rounded-lg text-white"
                        onClick={() => {
                          manageuserstatus(row._id, "delete");
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default ManageUser;
