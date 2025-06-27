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
                <span class="text-primary text-uppercase">&gt;&gt;</span>
              </h1>
              <center>
                <div id="main">
                  {catList.map((row) => (
                    <div class="main_part">
                      <Link to={`/searchsc/${row.catnm}`}>
                        <img
                          src={`/uploads/categoryicons/${row.caticonnm}`}
                          width={150}
                          height={120}
                        />
                      </Link>
                      <br />
                      <b>{row.catnm}</b>
                    </div>
                  ))}
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
