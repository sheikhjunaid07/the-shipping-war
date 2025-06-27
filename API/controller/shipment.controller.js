import "../models/connection.js";
import url from "url";
import path from "path";
import ShipmentSchemaModel from "../models/shipment.model.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const save = async (req, res) => {
  const shipment = await ShipmentSchemaModel.find();
  const l = shipment.length;
  const _id = l == 0 ? 1 : shipment[l - 1]._id + 1;

  //to get file & to move in specific folder
  const shipmenticon = req.files.producticon;
  const shipmenticonnm = Date.now() + "-" + shipmenticon.name;

  const shipdescription = req.files.description;
  const shipdescriptionnm = Date.now() + "-" + shipdescription.name;
  const uploadpathfile = path.join(
    __dirname,
    "../../UI/public/uploads/shipmenticons",
    shipmenticonnm
  );
  const uploadpathdesc = path.join(
    __dirname,
    "../../UI/public/uploads/shipmentdescriptions",
    shipdescriptionnm
  );
  shipmenticon.mv(uploadpathfile);
  shipdescription.mv(uploadpathdesc);

  const sDetails = {
    ...req.body,
    _id: _id,
    piconnm: shipmenticonnm,
    description: shipdescriptionnm,
    auctionprice: req.body.baseprice,
    info: Date(),
    bid_status: 1,
  };
  try {
    await ShipmentSchemaModel.create(sDetails);
    res.status(201).json({ status: true });
  } catch (error) {
    res.status(500).json({ status: false });
  }
};

export const fetch = async (request, response) => {
  var shipmentProductList = await ShipmentSchemaModel.find(request.query);
  if (shipmentProductList.length != 0)
    response.status(200).json(shipmentProductList);
  else response.status(500).json({ status: "false" });
};

export const update = async (request, response) => {
  var obj = request.body;
  if (obj != undefined) {
    let productDetails = await ShipmentSchemaModel.findOne(
      request.body.condition_obj
    );

    if (productDetails) {
      let product = await ShipmentSchemaModel.updateOne(
        request.body.condition_obj,
        {
          $set: request.body.content_obj,
        }
      );
      if (product) response.status(200).json({ msg: "OK" });
      else response.status(500).json({ status: "Server Error" });
    } else
      response.status(404).json({ status: "Requested resource not available" });
  } else response.status(500).json({ status: "Please enter valid condition" });
};
