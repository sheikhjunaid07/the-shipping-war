import SubCategorySchemaModel from "../models/subcategory.model.js";
import "../models/connection.js";
import path from "path";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
// ✅ Cloudinary inline config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const save = async (request, response) => {
  const subcategories = await SubCategorySchemaModel.find();
  const len = subcategories.length;
  const _id = len == 0 ? 1 : subcategories[len - 1]._id + 1;

  if (!request.files || !request.files.caticon) {
    return res.status(400).json({ status: false, message: "No file uploaded" });
  }

  const caticon = request.files.caticon;

  // ✅ Upload to Cloudinary (no config file needed)
  const result = await cloudinary.uploader.upload(caticon.tempFilePath, {
    folder: "subcategory_icons",
  });

  // const subcaticonnm = Date.now() + "-" + caticon.name;
  // const uploadpath = path.join(
  //   __dirname,
  //   "../../UI/public/uploads/subcategoryicons",
  //   subcaticonnm
  // );
  // caticon.mv(uploadpath);

  const scDetails = {
    ...request.body,
    _id: _id,
    subcaticonnm: result.secure_url, //✅ save Cloudinary image URL
  };
  try {
    await SubCategorySchemaModel.create(scDetails);
    response.status(201).json({ status: true, url: result.secure_url });
  } catch (error) {
    response.status(500).json({ status: false });
  }
};

export const fetch = async (request, response) => {
  var subCategoryList = await SubCategorySchemaModel.find(request.query);
  if (subCategoryList.length != 0) {
    response.status(200).json(subCategoryList);
  } else {
    response.status(500).json({ status: "false" });
  }
};

export const update = async (request, response) => {
  var obj = request.body;

  if (obj != undefined) {
    let subcategoryDetails = await SubCategorySchemaModel.findOne(
      request.body.condition_obj
    );
    console.log(subcategoryDetails);

    if (subcategoryDetails) {
      let subcategory = await SubCategorySchemaModel.updateOne(
        request.body.condition_obj,
        { $set: request.body.content_obj }
      );
      if (subcategory) response.status(200).json({ msg: "OK" });
      else response.status(500).json({ status: "Server Error" });
    } else
      response.status(404).json({ status: "Requested resource not available" });
  } else response.status(500).json({ status: "Please enter valid condition" });
};
