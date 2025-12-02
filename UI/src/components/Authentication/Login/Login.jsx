import "./Login.css";
import axios from "axios";
import { __userapiurl } from "../../../reqUrl";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
} from "../../../utilityFunctions/ValidationFunctions";
import { setTokens } from "../../../utils/tokenUtils";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [output, setOutput] = useState();
  const [captcha, setCaptcha] = useState();
  const [userInput, setUserInput] = useState();
  const [message, setMessage] = useState();

  const generateCaptcha = () => {
    const randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uniqueChar = "";

    for (let i = 0; i < 5; i++) {
      uniqueChar += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }

    setCaptcha(uniqueChar);
    setUserInput("");
    setMessage("");
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email, setEmailError);
    const isPasswordValid = validatePassword(password, setPasswordError);

    if (userInput !== captcha) {
      setOutput("Captcha does not match!");
      return;
    }

    const loginDetails = {
      email: email,
      password: password,
    };

    if (isEmailValid && isPasswordValid) {
      axios
        .post(__userapiurl + "login", loginDetails)
        .then((response) => {
          const {
            accessToken,
            refreshToken,
            userDetails: user,
          } = response.data;

          console.log(
            "Tokens",
            accessToken,
            "-------------------",
            refreshToken
          );

          setTokens(accessToken, refreshToken);
          localStorage.setItem("name", user.name);
          localStorage.setItem("email", user.email);
          localStorage.setItem("mobile", user.mobile);
          localStorage.setItem("address", user.address);
          localStorage.setItem("city", user.city);
          localStorage.setItem("gender", user.gender);
          localStorage.setItem("role", user.role);
          localStorage.setItem("info", user.info);

          user.role === "admin" ? navigate("/admin") : navigate("/user");
        })
        .catch(() => {
          setEmail("");
          setPassword("");
          setOutput("Invalid user or please verify your account....");
        });
    }
  };

  return (
    <>
      {/* <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h3>{output}</h3>
                <h2>
                  Login <span>Yourself!!</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container contact-form">
                <form>
                  <div className="form-group">
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
                  <div className="form-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => validatePassword(password)}
                    />
                    {passwordError && (
                      <span style={{ color: "red" }}>{passwordError}</span>
                    )}
                  </div>

                  <input
                    type="checkbox"
                    id="showPasswordCheckbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label htmlFor="showPasswordCheckbox">
                    &nbsp;Show Password
                  </label>

                  <div>
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                      {captcha}
                    </div>
                    <input
                      type="text"
                      id="submit"
                      value={userInput}
                      onChange={handleInputChange}
                      placeholder="Enter Captcha"
                    />
                    <div id="key">{message}</div>
                  </div>

                  <div className="btn_box">
                    <button type="button" onClick={handleSubmit}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="login-container py-5 bg-light min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="mb-5 text-light fw-bold text-center">
              Login <span style={{ color: "#0A97B0" }}>Here!!</span>
            </h1>

            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <div className="card shadow-sm border shadow-lg p-4 rounded-4">
                <form>
                  <div className="row mb-3">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control w-100 d-flex align-items-center"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => validateEmail(email)}
                      />
                      {emailError && (
                        <span style={{ color: "red" }}>{emailError}</span>
                      )}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        className="form-control w-100 d-flex align-items-center"
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => validatePassword(password)}
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                      {passwordError && (
                        <span style={{ color: "red" }}>{passwordError}</span>
                      )}
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "blue",
                        }}
                        className=""
                      >
                        {captcha}
                      </div>
                      <input
                        type="text"
                        id="submit"
                        value={userInput}
                        className="form-control w-60 d-flex align-items-center"
                        onChange={handleInputChange}
                        placeholder="Enter Captcha"
                      />
                      <div id="key">{message}</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn text-white w-100"
                    style={{ backgroundColor: "#0A97B0" }}
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                  {output}
                </form>
                <div className="mt-4 text-center">
                  <small className="text-muted">
                    New to Shipping?{" "}
                    <Link to="/register" style={{ color: "#0A97B0" }}>
                      Register here!!
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
