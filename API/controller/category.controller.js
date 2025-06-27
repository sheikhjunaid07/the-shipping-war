import CategorySchemaModel from "../models/category.model.js";
import "../models/connection.js";
import url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const save = async (request, response) => {
  const categories = await CategorySchemaModel.find();
  const len = categories.length;
  const _id = len == 0 ? 1 : categories[len - 1]._id + 1;

  //to get file & to move in specific folder
  const caticon = request.files.caticon;
  const caticonnm = Date.now() + "-" + caticon.name;
  const uploadpath = path.join(
    __dirname,
    "../../UI/public/uploads/categoryicons",
    caticonnm
  );
  caticon.mv(uploadpath);
  const categoryDetails = { ...request.body, _id: _id, caticonnm: caticonnm };
  try {
    await CategorySchemaModel.create(categoryDetails);
    response.status(201).json({ status: "true" });
  } catch {
    response.status(500).json({ status: "false" });
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
