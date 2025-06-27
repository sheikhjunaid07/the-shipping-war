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
      <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h3>{output}</h3>
                <h2>
                  Change Password <span>Here!!</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container contact-form">
                <form>
                  <div class="form-group">
                    <input
                      type="password"
                      placeholder="Old Password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </div>

                  <div className="btn_box">
                    <button type="button" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CPAdmin;
