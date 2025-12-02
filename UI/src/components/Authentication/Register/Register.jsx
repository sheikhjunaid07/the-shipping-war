import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          setGender("");
          setOutput("User register successfully....");
        })
        .catch((error) => {
          console.log(error);
          setOutput("User register failed....");
        });
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">
            Register <span style={{ color: "#0A97B0" }}>Yourself!!</span>
          </h2>

          {output && (
            <div
              className={`alert ${
                output.includes("success") ? "alert-success" : "alert-danger"
              } output-message`}
            >
              {output}
            </div>
          )}

          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className={`form-control `}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                />
                {nameError && <span style={{ color: "red" }}>{nameError}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`form-control`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                />
                {emailError && (
                  <span style={{ color: "red" }}>{emailError}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  id="mobile"
                  type="text"
                  className={`form-control `}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="1234567890"
                />
                {mobileError && (
                  <span style={{ color: "red" }}>{mobileError}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <select
                  id="city"
                  className={`form-select`}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Select city</option>
                  <optgroup label="Madhya Pradesh">
                    <option value="Indore">Indore</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Ujjain">Ujjain</option>
                  </optgroup>
                  <optgroup label="Maharashtra">
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nasik">Nasik</option>
                  </optgroup>
                </select>
                {cityError && <span style={{ color: "red" }}>{cityError}</span>}
              </div>

              <div className="form-group gender-group">
                <label>Gender</label>
                <div className="gender-options">
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="male">Male</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                {genderError && (
                  <span style={{ color: "red" }}>{genderError}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                rows="3"
                className={`form-control `}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main Street, City, State"
              />
              {addressError && (
                <span style={{ color: "red" }}>{addressError}</span>
              )}
            </div>

            <button
              type="button"
              className="btn w-100 mt-4"
              style={{ backgroundColor: "#0A97B0", color: "white" }}
              onClick={handleSubmit}
            >
              Register Now
            </button>

            <p className="text-center mt-3">
              Already registered?{" "}
              <Link
                to="/login"
                style={{ color: "#0A97B0" }}
                className="link-login"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
