import BidSchemaModel from "../models/bidproduct.model.js";
import "../models/connection.js";

export const save = async (request, response) => {
  const bidProducts = await BidSchemaModel.find();
  const len = bidProducts.length;
  const _id = len == 0 ? 1 : bidProducts[len - 1]._id + 1;

  const bid_details = { ...request.body, _id: _id, info: Date() };
  // console.log(bid_details);

  try {
    await BidSchemaModel.create(bid_details);
    response.status(201).json({ status: "true" });
  } catch (error) {
    response.status(500).json({ status: "false" });
    console.log(error);
  }
};

export const fetch = async (request, response) => {
  var bidproductList = await BidSchemaModel.find(request.query);
  console.log(bidproductList);

  if (bidproductList.length != 0) {
    response.status(200).json(bidproductList);
  } else {
    response.status(500).json({ status: "false" });
  }
};
