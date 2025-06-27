import mongoose from "mongoose";

const ShipmentSchema = mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  catnm: {
    type: String,
    required: [true, "Category name is required"],
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true, "Sub Category name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  baseprice: {
    type: Number,
    required: [true, "Baseprice is required"],
    trim: true,
  },
  auctionprice: {
    type: Number,
    trim: true,
  },
  piconnm: {
    type: String,
    required: [true, "Product icon name is required"],
    trim: true,
  },
  useremail: {
    type: String,
    required: [true, "User Email is required"],
    trim: true,
  },
  info: String,
  bid_status: Number,
});

const ShipmentSchemaModel = mongoose.model(
  "shipment_collection",
  ShipmentSchema
);

export default ShipmentSchemaModel;
