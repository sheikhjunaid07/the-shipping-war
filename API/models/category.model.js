import mongoose from "mongoose";
import "./connection.js";
import uniqueValidator from "mongoose-unique-validator";

const CategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true, "Category Name is Required!!"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  caticonnm: {
    type: String,
    required: [true, "Category Icon is Required!!"],
    trim: true,
  },
});

//add Validation on category model.
CategorySchema.plugin(uniqueValidator);

//create model fir CategorySchema
const CategorySchemaModel = mongoose.model(
  "category-collection",
  CategorySchema
);

export default CategorySchemaModel;
