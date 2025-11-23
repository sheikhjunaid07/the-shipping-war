import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { __userapiurl } from "../../../reqUrl";

function CPAdmin() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    const email = localStorage.getItem("email");
    axios
      .get(__userapiurl + "fetch", {
        params: { email: email, password: oldPassword },
      })
      .then(() => {
        if (newPassword == confirmNewPassword) {
          var update_details = {
            condition_obj: { email: email },
            content_obj: { password: confirmNewPassword },
          };
          axios.patch(__userapiurl + "update", update_details).then(() => {
            alert("Password changed successfully....");
            navigate("/logout");
          });
        } else {
          setOutput("New & Confirm New Password Mismatch....");
          setNewPassword("");
          setConfirmNewPassword("");
        }
      });
  };

  return (
    <>
      {/* <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h3>{output}</h3>
                <h2>Change Password <span>Here!!</span> </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container contact-form">
                <form>
                  <div class="form-group">
                    <input
                      type="password" placeholder="Old Password"
                      value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                  </div>
                  <div class="form-group">
                    <input
                      type="password" placeholder="New Password"
                      value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                  </div>
                  <div class="form-group">
                    <input
                      type="password" placeholder="Confirm New Password"
                      value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                  </div>
                  <div className="btn_box">
                    <button type="button" onClick={handleSubmit}> Submit </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container py-5 bg-light min-vh-100 d-flex flex-column justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            {/* Output message */}
            {output && (
              <div
                className="alert alert-danger text-center fw-semibold"
                role="alert"
              >
                {output}
              </div>
            )}

            <h2
              className="mb-4 text-center fw-bold"
              style={{ color: "#0A97B0" }}
            >
              Change <span className="text-secondary">Password</span> here!
            </h2>

            <form>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg rounded-pill border border-secondary"
                  placeholder="Current Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg rounded-pill border border-secondary"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg rounded-pill border border-secondary"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className=" w-100 btn-lg fw-bold rounded-pill shadow-sm btn-hover"
                style={{ backgroundColor: "#0A97B0" }}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CPAdmin;
