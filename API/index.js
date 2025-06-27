import express from "express";
import UserRouter from "./routes/user.router.js";
import CategoryRouter from "./routes/category.router.js";
import SubCategoryRouter from "./routes/subcategory.router.js";
import ShipmentRouter from "./routes/shipment.router.js";
import BidProductRouter from "./routes/bidproduct.router.js";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//configuration to fetch file from request
app.use(fileUpload());

//configuration to resolve cross origin problem
app.use(cors());

app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/subcategory", SubCategoryRouter);
app.use("/shipment", ShipmentRouter);
app.use("/bid",BidProductRouter)

app.listen(3001);
console.log("Server Started at http://localhost:3001");
