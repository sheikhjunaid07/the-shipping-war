import CategorySchemaModel from "../models/category.model.js";
import "../models/connection.js";
import url from "url";
import path from "path";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config({ path: './data.env' });
// ✅ Cloudinary inline config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const save = async (request, response) => {
  try {
    // 1️⃣ Validate File
    if (!request.files || !request.files.caticon) {
      return response
        .status(400)
        .json({ status: false, message: "No file uploaded" });
    }

    // 2️⃣ Create ID
    const categories = await CategorySchemaModel.find();
    const len = categories.length;
    const _id = len === 0 ? 1 : categories[len - 1]._id + 1;

    // 3️⃣ Cloudinary Upload
    const caticon = request.files.caticon;

    const result = await cloudinary.uploader.upload(caticon.tempFilePath, {
      folder: "category_icons",
    });

    // 4️⃣ Save to Database
    const categoryDetails = {
      ...request.body,
      _id: _id,
      caticonnm: result.secure_url,
    };

    await CategorySchemaModel.create(categoryDetails);

    // 5️⃣ Success
    return response
      .status(201)
      .json({ status: true, url: result.secure_url });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return response
      .status(500)
      .json({ status: false, message: "Internal Server Error", error: err });
  }
};


export const fetch = async (request, response) => {
  var categoryList = await CategorySchemaModel.find(request.query);
  if (categoryList.length != 0) {
    response.status(200).json(categoryList);
  } else {
    response.status(500).json({ status: "false" });
  }
};

// export const deletecategory = async (request, response) => {
//   var obj = request.body;
//   if (obj != undefined) {
//     var condition_obj = request.body.condition_obj;
//     let categoryDetails = await CategorySchemaModel.findOne(condition_obj);
//     if (categoryDetails) {
//       let category = await CategorySchemaModel.deleteOne(condition_obj);
//       if (category) response.status(200).json({ Status: "OK" });
//       else response.status(500).json({ Status: "Server Error" });
//     } else
//       response.status(404).json({ status: "Requested resource not available" });
//   } else {
//     response.status(500).json({ status: "Please enter valid condition" });
//   }
// };

export const update = async (request, response) => {
  var obj = request.body;

  if (obj != undefined) {
    let categoryDetails = await CategorySchemaModel.findOne(
      request.body.condition_obj
    );
    console.log(categoryDetails);

    if (categoryDetails) {
      let category = await CategorySchemaModel.updateOne(
        request.body.condition_obj,
        { $set: request.body.content_obj }
      );
      if (category) response.status(200).json({ msg: "OK" });
      else response.status(500).json({ status: "Server Error" });
    } else
      response.status(404).json({ status: "Requested resource not available" });
  } else response.status(500).json({ status: "Please enter valid condition" });
};
