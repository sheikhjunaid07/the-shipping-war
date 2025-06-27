import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../../reqUrl";
import {
  validateAddress,
  validateCity,
  validateEmail,
  validateGender,
  validateMobile,
  validateName,
} from "../../../utilityFunctions/ValidationFunctions";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [mobileError, setMobileError] = useState();
  const [addressError, setAddressError] = useState();
  const [cityError, setCityError] = useState();
  const [genderError, setGenderError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(name, setNameError);
    const isEmailValid = validateEmail(email, setEmailError);
    const isMobileValid = validateMobile(mobile, setMobileError);
    const isAddressValid = validateAddress(address, setAddressError);
    const isCityValid = validateCity(city, setCityError);
    const isGenderValid = validateGender(gender, setGenderError);

    const userDetails = {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      city: city,
      gender: gender,
    };

    if (
      isEmailValid &&
      isNameValid &&
      isMobileValid &&
      isAddressValid &&
      isCityValid &&
      isGenderValid
    ) {
      axios
        .post(__userapiurl + "save", userDetails)
        .then(() => {
          setName("");
          setEmail("");
          setMobile("");
          setCity("");
          setAddress("");
          setOutput("User register successfully....");
        })
        .catch(() => {
          setOutput("User register failed....");
        });
    }
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
                  Register <span>Here!!</span>
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
                      onBlur={() => validateName(name)}
                    />
                    {nameError && (
                      <span style={{ color: "red" }}>{nameError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => validateEmail(email)}
                    />
                    {emailError && (
                      <span style={{ color: "red" }}>{emailError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      onBlur={() => validateMobile(mobile)}
                    />
                    {mobileError && (
                      <span style={{ color: "red" }}>{mobileError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <textarea
                      rows="5"
                      cols="40"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onBlur={() => validateAddress(address)}
                    ></textarea>
                    <br />
                    {addressError && (
                      <span style={{ color: "red" }}>{addressError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      onBlur={() => validateCity(city)}
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
                    </select>{" "}
                    &nbsp;
                    {cityError && (
                      <span style={{ color: "red" }}>{cityError}</span>
                    )}
                  </div>
                  <div>
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      onBlur={() => validateGender(gender)}
                    />
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      onBlur={() => validateGender(gender)}
                    />
                    {genderError && (
                      <span style={{ color: "red" }}>{genderError}</span>
                    )}
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

export default Register;
