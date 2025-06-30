import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Auth from "../../Authentication/Auth/Auth";

function Header() {
  const [HeaderContent, setHeaderContent] = useState();

  useEffect(() => {
    setInterval(() => {
      if (
        localStorage.getItem("token") != undefined &&
        localStorage.getItem("role") == "admin"
      ) {
        setHeaderContent(
          <>
            {/* header section starts */}
            <header className="header_section">
              <div className="header_bottom">
                <div className="container-fluid">
                  <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="index.html">
                      <span>
                        <img
                          src="images/fevicon.png"
                          width={"30px"}
                          height={"30px"}
                        />
                      </span>
                      <span style={{ color: "#0a97b0" }}> Shipping War </span>
                    </a>

                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className=""> </span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link">
                            <Link to="/admin">
                              Admin Home{" "}
                              <span className="sr-only">(current)</span>
                            </Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/manageuser"> Manage User</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/manageproducts"> Manage Products</Link>
                          </a>
                        </li>
                        <div class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            style={{ color: "#0a97b0" }}
                          >
                            Manage Category
                          </a>
                          <div class="dropdown-menu rounded-0 m-0">
                            <a class="dropdown-item">
                              <Link to="/addcategory">Add Category</Link>
                            </a>
                            <a class="dropdown-item">
                              <Link to="/addsubcategory">Add SubCategory</Link>
                            </a>
                            <a class="dropdown-item">
                              <Link to="/editcategory">Edit Category</Link>
                            </a>
                            <a class="dropdown-item">
                              <Link to="/editsubcategory">
                                Edit Sub Category
                              </Link>
                            </a>
                          </div>
                        </div>
                        <div class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            style={{ color: "#0a97b0" }}
                          >
                            Settings
                          </a>
                          <div class="dropdown-menu rounded-0 m-0">
                            <a class="dropdown-item">
                              <Link to="/epadmin">Edit Profile</Link>
                            </a>
                            <a class="dropdown-item">
                              <Link to="/cpadmin">Change Password</Link>
                            </a>
                          </div>
                        </div>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/logout">
                              <i className="fa fa-user" aria-hidden="true"></i>{" "}
                              Logout
                            </Link>
                          </a>
                        </li>
                        {/* <form className="form-inline">
                          <button
                            className="btn my-2 my-sm-0 nav_search-btn"
                            type="submit"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </form> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
            {/* end header section */}
          </>
        );
      } else if (
        localStorage.getItem("token") != undefined &&
        localStorage.getItem("role") == "user"
      ) {
        setHeaderContent(
          <>
            {/* header section starts */}
            <header className="header_section">
              <div className="header_bottom">
                <div className="container-fluid">
                  <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="index.html">
                      <span>
                        <img
                          src="images/fevicon.png"
                          width={"30px"}
                          height={"30px"}
                        />
                      </span>
                      <span style={{ color: "#0a97b0" }}> Shipping War </span>
                    </a>

                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className=""> </span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link">
                            <Link to="/user">
                              Home <span className="sr-only">(current)</span>
                            </Link>
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/search">Search</Link>
                          </a>
                        </li>l
                        <div class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            style={{ color: "#0a97b0" }}
                          >
                            Products
                          </a>
                          <div class="dropdown-menu rounded-0 m-0">
                            <a class="dropdown-item">
                              <Link to="/addproduct">Add Products</Link>
                            </a>
                            <a class="dropdown-item">
                              <Link to="/allproducts">Show All Products</Link>
                            </a>
                            <a class="dropdown-item">
                              <Link to="/myproduct">My Products</Link>
                            </a>
                          </div>
                        </div>

                        <div class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            style={{ color: "#0a97b0" }}
                          >
                            Settings
                          </a>
                          <div class="dropdown-menu rounded-0 m-0">
                            <a class="dropdown-item">
                              <Link to="/epadmin">Edit Profile</Link>
                            </a>
                            <a class="dropdown-item">
                              <Link to="/cpadmin">Change Password</Link>
                            </a>
                          </div>
                        </div>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/logout">
                              <i className="fa fa-user" aria-hidden="true"></i>{" "}
                              Logout
                            </Link>
                          </a>
                        </li>
                        {/* <form className="form-inline">
                          <button
                            className="btn my-2 my-sm-0 nav_search-btn"
                            type="submit"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </form> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
            {/* end header section */}
          </>
        );
      } else {
        setHeaderContent(
          <>
            {/* header section starts */}
            <header className="header_section">
              <div className="header_bottom">
                <div className="container-fluid">
                  <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="index.html">
                      <span>
                        <img
                          src="images/fevicon.png"
                          width={"30px"}
                          height={"30px"}
                        />
                      </span>
                      <span style={{ color: "#0a97b0" }}> Shipping War </span>
                    </a>

                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className=""> </span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link">
                            <Link to="/">
                              Home <span className="sr-only">(current)</span>
                            </Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/about"> About</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/service">Services</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/contact">Contact</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/register">Register</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/login">
                              <i className="fa fa-user" aria-hidden="true"></i>{" "}
                              Login
                            </Link>
                          </a>
                        </li>
                        {/* <form className="form-inline">
                          <button
                            className="btn my-2 my-sm-0 nav_search-btn"
                            type="submit"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </form> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
            {/* end header section */}
          </>
        );
      }
    }, 1);
  }, []);
  return (
    <>
      <Auth />
      {HeaderContent}
    </>
  );
}

export default Header;
