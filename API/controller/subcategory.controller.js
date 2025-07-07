import SubCategorySchemaModel from "../models/subcategory.model.js";
import "../models/connection.js";
import url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const save = async (request, response) => {
  const subcategories = await SubCategorySchemaModel.find();
  const len = subcategories.length;
  const _id = len == 0 ? 1 : subcategories[len - 1]._id + 1;

  const caticon = request.files.caticon;
  const subcaticonnm = Date.now() + "-" + caticon.name;
  const uploadpath = path.join(
    __dirname,
    "../../UI/public/uploads/subcategoryicons",
    subcaticonnm
  );
  caticon.mv(uploadpath);

  const scDetails = { ...request.body, _id: _id, subcaticonnm: subcaticonnm };
  try {
    await SubCategorySchemaModel.create(scDetails);
    response.status(201).json({ status: true });
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
