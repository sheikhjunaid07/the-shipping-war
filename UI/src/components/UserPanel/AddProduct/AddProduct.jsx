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
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 offset-md-1 ">
            <div className="heading_container">
              <h2>
                Add Shipping Product <span>Here!!</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-4 ">
          <div className="col-lg-4 col-md-5 offset-md">
            <div className="form_container contact-form">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Add Shipping Title"
                    value={title}
                    className="form-control p-3"
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={() => validateTitle(title)}
                  />
                  {<span style={{ color: "red" }}>{titleError}</span>}
                </div>
                <div className="mb-3">
                  <select
                    value={catName}
                    className="form-control"
                    style={{ backgroundColor: "whitesmoke" }}
                    onChange={(e) => setCatName(e.target.value)}
                    onBlur={() => validateCategoryName(catName)}
                  >
                    <option>Select Category</option>
                    {catList.map((row) => (
                      <option>{row.catnm}</option>
                    ))}
                  </select>
                  <br />
                  {<span style={{ color: "red" }}>{catNameError}</span>}
                </div>
                <div className="mb-3">
                  <select
                    style={{ backgroundColor: "whitesmoke" }}
                    value={subCatName}
                    className="form-control"
                    onChange={(e) => setSubCatName(e.target.value)}
                    onBlur={() => validateSubCategoryName(subCatName)}
                  >
                    <option>Select Sub Category</option>
                    {subCatList.map((row) => (
                      <option>{row.subcatnm}</option>
                    ))}
                  </select>
                  <br />
                  {<span style={{ color: "red" }}>{subCatNameError}</span>}
                </div>
                <div className="mb-3">
                  <label style={{ color: "gray", fontSize: "12px" }}>
                    Upload Doc Containing All Details About Product (PDF, DOCX
                    only) &nbsp;
                  </label>
                  <input
                    id="descfile"
                    type="file"
                    className="form-control"
                    accept=".pdf, .doc, .docx, .txt"
                    placeholder="Shipment Description"
                    onChange={handleProductDescription}
                    onBlur={() => validateDescription(description)}
                  />
                  {<span style={{ color: "red" }}>{descriptionError}</span>}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Base Amount For Shipment"
                    value={baseprice}
                    className="form-control p-3"
                    onChange={(e) => setBaseprice(e.target.value)}
                    onBlur={() => validateBaseprice(baseprice)}
                  />
                  {<span style={{ color: "red" }}>{basepriceError}</span>}
                </div>
                <div className="mb-3">
                  <label style={{ color: "gray", fontSize: "12px" }}>
                    Upload Shipment Image (JPG, PNG, GIF only)
                  </label>
                  <input
                    id="myfile"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="form-control"
                    placeholder="Shipment Photos"
                    onChange={handleProductIcon}
                    onBlur={() => validateFile(file)}
                  />
                  {<span style={{ color: "red" }}>{fileError}</span>}
                </div>
                <div className="btn_box">
                  <button
                    type="button"
                    style={{ backgroundColor: "#0A97B0", color: "white" }}
                    className="form-control"
                    onClick={handleSubmit}
                  >
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
    </>
  );
}

export default AddProduct;
