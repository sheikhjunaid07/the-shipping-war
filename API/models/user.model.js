import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, "Name field is Required!!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required!!"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required!!"],
    maxLength: 10,
    minLength: 5,
    trim: true,
  },
  mobile: {
    type: Number,
    required: [true, "Mobile is Required!!"],
    maxLength: 10,
    minLength: 10,
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is Required!!"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "City is Required!!"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Gender is Required!!"],
    trim: true,
  },
  role: String,
  status: Number,
  info: String,
});

//Apply unique validator to UserSchema
UserSchema.plugin(uniqueValidator);

//connect db collection to schema model
const UserSchemaModel = mongoose.model("user-details", UserSchema);

export default UserSchemaModel;
