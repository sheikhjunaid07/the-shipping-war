import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { __subcategoryapiurl } from "../../../reqUrl";

function SearchSubCategory() {
  const params = useParams();

  const [subCatList, setSubCatList] = useState([]);

  axios
    .get(__subcategoryapiurl + "fetch", {
      params: { catnm: params.catnm },
    })
    .then((response) => setSubCatList(response.data))
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h1 class="mb-4">
                Sub Category List{" "}
                <span class="text-primary text-uppercase">&gt;&gt;</span>{" "}
                {params.catnm}
              </h1>
              <div id="main">
                <div className="row">
                  {subCatList.map((row) => (
                    <div className="col-md-3  mb-4">
                      <Link to={`/showproduct/${row.subcatnm}`}>
                        <img
                          src={`/uploads/subcategoryicons/${row.subcaticonnm}`}
                          height={120}
                          width={150}
                        />
                      </Link>
                      <br />
                      <b>{row.subcatnm}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchSubCategory;
