import { useEffect, useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../../reqUrl";

function EPAdmin() {
  // const [users, setUserDetails] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  // const [output, setOutput] = useState();

  useEffect(() => {
    const email = localStorage.getItem("email");
    axios
      .get(__userapiurl + "fetch", {
        params: { email: email },
      })
      .then((response) => {
        const users = response.data[0];
        setName(users.name);
        setEmail(users.email);
        setMobile(users.mobile);
        setAddress(users.address);
        setCity(users.city);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    var update_details = {
      condition_obj: { email: email },
      content_obj: {
        name: name,
        mobile: mobile,
        address: address,
        city: city,
        gender: gender,
      },
    };
    axios.patch(__userapiurl + "update", update_details).then(() => {
      alert("User profile edited successfully....");
    });
  };

  return (
    <>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-5 offset-md-1">
            <div className="heading_container">
              <h2>
                Edit Profile <span>Here!!</span>
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
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    readOnly
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <textarea
                    rows="5"
                    cols="40"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <div class="form-group">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <optgroup label="Madhya Pradesh">
                      <option>Indore</option>
                      <option>Bhopal</option>
                      <option>Ujjain</option>
                    </optgroup>
                    <optgroup label="Maharashtra">
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Nashik</option>
                    </optgroup>
                  </select>
                </div>
                <div class="form-group">
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
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
      </div> */}
      <div className="container-fluid py-5 bg-light min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="mb-5 text-dark fw-bold text-center">
              Edit <span style={{ color: "#0A97B0" }}>Profile</span> here!!!
            </h1>

            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <div className="card shadow-sm border-0 p-4 rounded-4">
                <form>
                  <div className="row mb-3">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <label htmlFor="name" className="form-label text-dark">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label text-dark">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        readOnly
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <label htmlFor="mobile" className="form-label text-dark">
                        Mobile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="city" className="form-label text-dark">
                        City
                      </label>
                      <select
                        className="form-select"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <optgroup label="Madhya Pradesh">
                          <option>Indore</option>
                          <option>Bhopal</option>
                          <option>Ujjain</option>
                        </optgroup>
                        <optgroup label="Maharashtra">
                          <option>Mumbai</option>
                          <option>Pune</option>
                          <option>Nasik</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label text-dark">
                      Address
                    </label>
                    <textarea
                      rows="4"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label d-block text-dark">
                      Gender
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn text-white w-100"
                    style={{ backgroundColor: "#0A97B0" }}
                    onClick={handleSubmit}
                  >
                    Save Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EPAdmin;
