export const validateName = (name, setNameError) => {
  if (!name) {
    setNameError("Name is Required");
    return false;
  } else {
    setNameError("");
    return true;
  }
};

export const validateEmail = (email, setEmailError) => {
  if (!email) {
    setEmailError("Email is Required!!");
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError("Invalid email format");
    return false;
  } else {
    setEmailError("");
    return true;
  }
};

export const validatePassword = (password, setPasswordError) => {
  if (!password) {
    setPasswordError("Password is Required!!");
    return false;
  } else if (password.length < 8) {
    setPasswordError("Password must be at least 8 characters!!");
    return false;
  } else {
    setPasswordError("");
    return true;
  }
};

export const validateMobile = (mobile, setMobileError) => {
  if (!mobile) {
    setMobileError("Number is Required!!");
    return false;
  } else if (mobile.length < 10 && mobile.length > 10) {
    setMobileError("Number must be 10 digits!!");
    return false;
  } else {
    setMobileError("");
    return true;
  }
};

export const validateAddress = (address, setAddressError) => {
  if (!address) {
    setAddressError("Address is Required!!");
    return false;
  } else {
    setAddressError("");
    return true;
  }
};

export const validateCity = (city, setCityError) => {
  if (!city) {
    setCityError("City is Required!!");
    return false;
  } else {
    setCityError("");
    return true;
  }
};

export const validateGender = (gender, setGenderError) => {
  if (!gender) {
    setGenderError("Gender is Required!!");
    return false;
  } else {
    setGenderError("");
    return true;
  }
};

export const validateCategoryName = (catName, setCatNameError) => {
  if (!catName) {
    setCatNameError("Category Name is Required!!");
    return false;
  } else {
    setCatNameError("");
    return true;
  }
};

export const validateFile = (file, setFileError) => {
  if (!file) {
    setFileError("File is Required!!");
    return false;
  } else {
    setFileError("");
    return true;
  }
};

export const validateSubCategoryName = (subCatName, setSubCatNameError) => {
  if (!subCatName) {
    setSubCatNameError("Sub Category Name is Required!!");
    return false;
  } else {
    setSubCatNameError("");
    return true;
  }
};

export const validateTitle = (title, setTitleError) => {
  if (!title) {
    setTitleError("Product Title is Required!!");
    return false;
  } else {
    setTitleError("");
    return true;
  }
};

export const validateDescription = (description, setDescriptionError) => {
  if (!description) {
    setDescriptionError(" Description File Must be attached!!");
    return false;
  } else {
    setDescriptionError("");
    return true;
  }
};

export const validateBaseprice = (baseprice, setBasepriceError) => {
  if (!baseprice) {
    setBasepriceError("Base Price is Required for Bidding!!");
    return false;
  } else {
    setBasepriceError("");
    return true;
  }
};
