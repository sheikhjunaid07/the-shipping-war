import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const BidSchema = mongoose.Schema({
  _id: Number,
  product_id: Number,
  bidprice: Number,
  user_id: String,
  info: String,
});

BidSchema.plugin(uniqueValidator);

const BidSchemaModel = mongoose.model("bid-product", BidSchema);

export default BidSchemaModel;
