import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { __categoryapiurl } from "../../../reqUrl";

function Search() {
  const [catList, setCatList] = useState([]);

  useState(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => {
        setCatList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h1 class="mb-4">
                Category List{" "}
                <span class="text-uppercase" style={{ color: "#0A97B0" }}>
                  &gt;&gt;
                </span>
              </h1>
              <div className="row">
                {catList.map((row) => (
                  <div className="col-md-4 mb-4" key={row.catnm}>
                    <div className="text-center">
                      <Link to={`/searchsc/${row.catnm}`}>
                        <img
                          src={`/uploads/categoryicons/${row.caticonnm}`}
                          width={200}
                          height={150}
                          className="img-fluid"
                        />
                      </Link>
                      <br />
                      <b>{row.catnm}</b>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
