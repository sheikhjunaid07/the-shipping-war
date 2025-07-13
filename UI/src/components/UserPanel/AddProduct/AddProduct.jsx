import { useEffect, useState } from "react";
import axios from "axios";
import {
  __categoryapiurl,
  __shipmentapiurl,
  __subcategoryapiurl,
} from "../../../reqUrl";
import {
  validateBaseprice,
  validateCategoryName,
  validateDescription,
  validateFile,
  validateSubCategoryName,
  validateTitle,
} from "../../../utilityFunctions/ValidationFunctions";

function AddProduct() {
  const [title, setTitle] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [description, setDescription] = useState();
  const [baseprice, setBaseprice] = useState();
  const [file, setFile] = useState();
  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);
  const [output, setOutput] = useState();

  const [titleError, setTitleError] = useState();
  const [catNameError, setCatNameError] = useState();
  const [subCatNameError, setSubCatNameError] = useState();
  const [descriptionError, setDescriptionError] = useState();
  const [basepriceError, setBasepriceError] = useState();
  const [fileError, setFileError] = useState();

  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => setCatList(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (catName) {
      axios
        .get(__subcategoryapiurl + "fetch", {
          params: { catnm: catName },
        })
        .then((response) => setSubCatList(response.data))
        .catch((error) => console.log(error));
    }
  }, [catName]);

  const handleProductDescription = (e) => {
    setDescription(e.target.files[0]);
  };
  const handleProductIcon = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const isTitleValid = validateTitle(title, setTitleError);
    const isCatNameValid = validateCategoryName(catName, setCatNameError);
    const isSubCatNameValid = validateSubCategoryName(
      subCatName,
      setSubCatNameError
    );
    const isDescriptionValid = validateDescription(
      description,
      setDescriptionError
    );
    const isBasepriceValid = validateBaseprice(baseprice, setBasepriceError);
    const isFileValid = validateFile(file, setFileError);

    var formData = new FormData();

    formData.append("title", title);
    formData.append("catnm", catName);
    formData.append("subcatnm", subCatName);
    formData.append("description", description);
    formData.append("baseprice", baseprice);
    formData.append("useremail", localStorage.getItem("email"));
    formData.append("producticon", file);

    const config = {
      "content-type": "multipart/form-data",
    };

    if (
      isTitleValid &&
      isCatNameValid &&
      isSubCatNameValid &&
      isDescriptionValid &&
      isBasepriceValid &&
      isFileValid
    ) {
      axios.post(__shipmentapiurl + "save", formData, config).then(() => {
        setOutput("Shipping Product Added Successfully..");
        setTitle("");
        setCatName("");
        setSubCatName("");
        setBaseprice("");
        document.getElementById("myfile").value = "";
        document.getElementById("descfile").value = "";
      });
    }
  };

  return (
    <>
      {" "}
      <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h2>
                  Add Shipping Product <span>Here!!</span>
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
                      placeholder="Add Shipping Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      onBlur={() => validateTitle(title)}
                    />
                    {titleError && (
                      <span style={{ color: "red" }}>{titleError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <label>Select Category: &nbsp;</label>
                    <select
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                      onBlur={() => validateCategoryName(catName)}
                    >
                      <option>--Select--</option>
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
                    <label>Select Sub Category: &nbsp;</label>
                    <select
                      value={subCatName}
                      onChange={(e) => setSubCatName(e.target.value)}
                      onBlur={() => validateSubCategoryName(subCatName)}
                    >
                      <option>--Select--</option>
                      {subCatList.map((row) => (
                        <option>{row.subcatnm}</option>
                      ))}
                    </select>
                    <br />
                    {subCatNameError && (
                      <span style={{ color: "red" }}>{subCatNameError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      id="descfile"
                      type="file"
                      class="form-control"
                      accept=".pdf, .doc, .docx"
                      placeholder="Shipment Description"
                      onChange={handleProductDescription}
                      onBlur={() => validateDescription(description)}
                    />
                    {descriptionError && (
                      <span style={{ color: "red" }}>{descriptionError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Base Amount For Shipment"
                      value={baseprice}
                      onChange={(e) => setBaseprice(e.target.value)}
                      onBlur={() => validateBaseprice(baseprice)}
                    />
                    {basepriceError && (
                      <span style={{ color: "red" }}>{basepriceError}</span>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      id="myfile"
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      class="form-control"
                      placeholder="Shipment Photos"
                      onChange={handleProductIcon}
                      onBlur={() => validateFile(file)}
                    />
                    {fileError && (
                      <span style={{ color: "red" }}>{fileError}</span>
                    )}
                  </div>
                  <div className="btn_box">
                    <button type="button" onClick={handleSubmit}>
                      Add Product
                    </button>
                    <br />
                    {output}
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

export default AddProduct;
