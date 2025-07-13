import { useState } from "react";
import axios from "axios";
import { __categoryapiurl } from "../../../reqUrl";
import {
  validateCategoryName,
  validateFile,
} from "../../../utilityFunctions/ValidationFunctions";

function AddCategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();

  const [catNameError, setCatNameError] = useState();
  const [fileError, setFileError] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCatNameValid = validateCategoryName(catName, setCatNameError);
    const isFileValid = validateFile(file, setFileError);

    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };

    if (isCatNameValid && isFileValid) {
      axios.post(__categoryapiurl + "save", formData, config).then(() => {
        setCatName("");
        setOutput("Category Added Successfully..");
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
                  Add Category <span>Here!!</span>
                </h2>
                {output}
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
                      placeholder="Add Category Name"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                      onBlur={() => validateCategoryName(catName)}
                    />
                    {catNameError && (
                      <span style={{ color: "red" }}>{catNameError}</span>
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
                      Add Category
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

export default AddCategory;
