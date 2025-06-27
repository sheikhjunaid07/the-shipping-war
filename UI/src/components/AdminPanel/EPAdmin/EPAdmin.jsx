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
      <section className="contact_section">
        <div className="container-fluid">
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
        </div>
      </section>
    </>
  );
}

export default EPAdmin;
