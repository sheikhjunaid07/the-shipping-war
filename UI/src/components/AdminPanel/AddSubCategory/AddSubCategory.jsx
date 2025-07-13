import { useEffect, useState } from "react";
import axios from "axios";
import { __categoryapiurl, __subcategoryapiurl } from "../../../reqUrl";
import {
  validateCategoryName,
  validateFile,
  validateSubCategoryName,
} from "../../../utilityFunctions/ValidationFunctions";

function AddSubCategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [catList, setCatList] = useState([]);
  const [subCatName, setSubCatName] = useState();
  const [output, setOutput] = useState();

  const [catNameError, setCatNameError] = useState();
  const [subCatNameError, setSubCatNameError] = useState();
  const [fileError, setFileError] = useState();

  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => {
        setCatList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCatNameValid = validateCategoryName(catName, setCatNameError);
    const isSubCatNameValid = validateSubCategoryName(
      subCatName,
      setSubCatNameError
    );
    const isFileValid = validateFile(file, setFileError);

    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("subcatnm", subCatName);
    formData.append("caticon", file);

    const config = { "content-type": "multipart/form-data" };

    if (isCatNameValid && isSubCatNameValid && isFileValid) {
      axios.post(__subcategoryapiurl + "save", formData, config).then(() => {
        setCatName("");
        setSubCatName("");
        setOutput("SubCategory Added Successfully....");
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
                <h2>
                  Add Sub Category <span>Here!!</span>
                </h2>
                {output}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container contact-form">
                <form>
                  <div className="form-group">
                    <label>Category Name: </label>
                    <select
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                      onBlur={() => validateCategoryName(catName)}
                    >
                      <option>Select Category</option>
                      {catList.map((row) => (
                        <option>{row.catnm}</option>
                      ))}
                    </select>
                    <br />
                    {catNameError && (
                      <span style={{ color: "red" }}>{catNameError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Add Sub Category Name"
                      value={subCatName}
                      onChange={(e) => setSubCatName(e.target.value)}
                      onBlur={() => validateSubCategoryName(subCatName)}
                    />
                    {subCatNameError && (
                      <span style={{ color: "red" }}>{subCatNameError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="file"
                      onChange={handleChange}
                      onBlur={() => validateFile(file)}
                    />
                    {fileError && (
                      <span style={{ color: "red" }}>{fileError}</span>
                    )}
                  </div>
                  <div className="btn_box">
                    <button type="button" onClick={handleSubmit}>
                      Add Sub Category
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

export default AddSubCategory;
