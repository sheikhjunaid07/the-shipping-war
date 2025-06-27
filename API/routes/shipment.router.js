import express from "express";
import * as ShipmentController from "../controller/shipment.controller.js";

const router = express.Router();

router.post("/save", ShipmentController.save);

router.get("/fetch", ShipmentController.fetch);

router.patch("/update", ShipmentController.update);

export default router;
